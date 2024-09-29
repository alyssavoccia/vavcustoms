// import globals.css
import '@/assets/styles/globals.css';

export const metadata = {
  title: 'VAV Customs',
  keywords: 'custom woodwork, tools, plans, projects',
  description: 'Custom woodwork'
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body className='flex flex-col h-screen'>
        <main className='flex-1'>
          {children}
        </main>
      </body>
    </html>
  )
};

export default MainLayout;