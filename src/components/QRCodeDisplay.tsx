
import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { EmergencyProfile } from '../types';
import { Button } from '../components/ui/button';
import { Download, Share2 } from 'lucide-react';

interface QRCodeDisplayProps {
  profile: EmergencyProfile;
  baseUrl: string;
}

const QRCodeDisplay = ({ profile, baseUrl }: QRCodeDisplayProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const profileId = profile.fullName.replace(/\s+/g, '-').toLowerCase();
  const emergencyUrl = `${baseUrl}/emergency/${profileId}`;

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        emergencyUrl,
        {
          width: 220,
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
    }
  }, [emergencyUrl]);

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
          files: [file],
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <canvas ref={canvasRef} />
      </div>
      
      <p className="mt-4 text-sm text-center text-muted-foreground">
        Scan this QR code to access emergency information
      </p>
      
      <div className="flex gap-3 mt-4">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={downloadQRCode}
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Download
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={shareQRCode}
          className="flex items-center gap-2"
        >
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </div>
    </div>
  );
};

export default QRCodeDisplay;
