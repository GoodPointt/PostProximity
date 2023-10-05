import '@/styles/globals.css';
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

export const metadata = {
  title: 'PostProximity',
  description: 'Posts that Matter, Shared Better.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
        <Provider>
          <div className="gradient" />
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
