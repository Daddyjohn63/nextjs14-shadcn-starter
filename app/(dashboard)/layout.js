import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

function layout({ children }) {
  return (
    <main className="grid lg:grid-cols-7">
      {/* first-col hide on small screen */}
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
        <Sidebar />
      </div>
      {/* second-col hide dropdown on big screen */}
      <div className="lg:col-span-6">
        <Navbar />
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </div>
    </main>
  );
}
export default layout;
