import './globals.css';

export const metadata = {
  title: 'IP Address Tracker',
  description: 'Tracking user by ip address',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
