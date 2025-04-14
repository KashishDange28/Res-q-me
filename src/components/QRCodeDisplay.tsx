import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { EmergencyProfile } from '../types';
import { Button } from '../components/ui/button';
import { Download, Share2, ExternalLink } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
    <div className="flex flex-col items-center space-y-4">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {t('qrCode.scanPrompt')}
      </p>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <canvas ref={canvasRef} />
      </div>
      <div className="flex space-x-4">
        <Button onClick={downloadQRCode}>
          <Download className="w-4 h-4 mr-2" />
          {t('qrCode.download')}
        </Button>
        <Button onClick={shareQRCode}>
          <Share2 className="w-4 h-4 mr-2" />
          {t('qrCode.share')}
        </Button>
        <Button onClick={openDirectLink}>
          <ExternalLink className="w-4 h-4 mr-2" />
          {t('qrCode.openDirectLink')}
        </Button>
      </div>
    </div>
  );
};

export default QRCodeDisplay;
