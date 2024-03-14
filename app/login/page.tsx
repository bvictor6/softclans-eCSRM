import BCMSLogo from '../bcms-logo';
import LoginForm from '@/app/ui/login-form';
import Image from 'next/image';
 
export default function LoginPage() {
  return (
    <main className="items-center justify-center ">
      <div className="relative mx-auto items-center flex w-full max-w-[800px] flex-row  p-12 mt-10 ">        
        <div className="bg-blue-600 lg:block w-1/2 md:w-1/2 xl:w-1/2 h-96">
          <div className="w-32 text-white items-center md:w-36 pl-6">
              <BCMSLogo />
          </div>
        </div>
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:w-1/2 xl:w-1/2 h-96 px-0 flex items-center justify-center">
          <LoginForm />
        </div>        
      </div>
    </main>
  );
}