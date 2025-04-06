
import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { EmergencyProfile } from '../types';
import { Button } from '../components/ui/button';
import { Download, Share2, ExternalLink } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

interface QRCodeDisplayProps {
  profile: EmergencyProfile;
  baseUrl: string;
}

const QRCodeDisplay = ({ profile, baseUrl }: QRCodeDisplayProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrUrl, setQrUrl] = useState<string>('');
  const profileId = profile.fullName.replace(/\s+/g, '-').toLowerCase();
  const emergencyUrl = `${baseUrl}/emergency/${profileId}`;
  const isMobile = useIsMobile();

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        emergencyUrl,
        {
          width: isMobile ? 180 : 220,
          margin: 1,
          color: {
            dark: '#00b2c6',
            light: '#ffffff',
          },
        },
        (error) => {
          if (error) console.error('Error generating QR code:', error);
        }
      );

      // Also create a data URL for direct linking
      QRCode.toDataURL(emergencyUrl, {
        width: 220,
        margin: 1,
        color: {
          dark: '#00b2c6',
          light: '#ffffff',
        },
      }, (err, url) => {
        if (!err) setQrUrl(url);
      });
    }
  }, [emergencyUrl, isMobile]);

  const downloadQRCode = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `resqme-${profileId}.png`;
      link.click();
    }
  };

  const shareQRCode = async () => {
    if (!navigator.share) {
      alert('Web Share API is not supported in your browser.');
      return;
    }

    try {
      const canvas = canvasRef.current;
      if (canvas) {
        const blob = await new Promise<Blob>((resolve) => {
          canvas.toBlob((blob) => {
            if (blob) resolve(blob);
          }, 'image/png');
        });

        const file = new File([blob], `resqme-${profileId}.png`, { type: 'image/png' });
        
        await navigator.share({
          title: 'ResQMe Emergency Profile',
          text: 'Scan this QR code to access my emergency information.',
          url: emergencyUrl,
          files: [file],
        }).catch(error => {
          console.log('Share failed:', error);
          // Fallback to simple URL sharing if file sharing fails
          navigator.share({
            title: 'ResQMe Emergency Profile',
            text: 'Access my emergency information:',
            url: emergencyUrl,
          });
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const openDirectLink = () => {
    window.open(emergencyUrl, '_blank');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-b from-white to-resq-50 p-4 rounded-xl shadow-md border border-resq-100">
        <canvas ref={canvasRef} />
      </div>
      
      <p className="mt-4 text-sm text-center text-muted-foreground">
        Scan this QR code to access emergency information
      </p>
      
      <div className="flex flex-wrap gap-3 mt-4 justify-center">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={downloadQRCode}
          className="flex items-center gap-2 bg-white hover:bg-resq-50"
        >
          <Download className="h-4 w-4 text-resq-600" />
          Download
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={shareQRCode}
          className="flex items-center gap-2 bg-white hover:bg-resq-50"
        >
          <Share2 className="h-4 w-4 text-resq-600" />
          Share
        </Button>
        
        <Button 
          variant="default" 
          size="sm" 
          onClick={openDirectLink}
          className="flex items-center gap-2 bg-resq-500 hover:bg-resq-600 text-white"
        >
          <ExternalLink className="h-4 w-4" />
          Open Direct Link
        </Button>
      </div>
    </div>
  );
};

export default QRCodeDisplay;
