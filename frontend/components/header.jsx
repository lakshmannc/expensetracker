import Link from 'next/link';
import { SignInButton,SignedIn,SignedOut,UserButton } from '@clerk/nextjs'
import Image from 'next/image';
import { Button } from './ui/button';
import { LayoutDashboard, PenBox } from 'lucide-react';

const Header = () => {
  return (
    <div className='fixed top-0 w-full bg-blue/80 backdrop-blur-md z-50 border-b'>
      <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link href="/">
        <Image src={"/logo.png"} alt="logo" width={60} height={200} className='h-12 w-auto object-contain'/>
        </Link>
      
           
         <div className='flex items-center space-x-4'>
          <SignedIn>
            <Link href={"/dashboard"} className='text-grey-600 hover:text-blue-600 flex items-center gap-2'>
              <Button className='h-12 w-40' variant="outline"> 
                <LayoutDashboard size={18}/>
                <span className='hidden md:inline'>Dashboard</span></Button> 
            </Link>
            <Link href={"/account"}>
               <PenBox size={18}/>
              <Button className="flex items-center gap-2"> 
                <span>Account</span></Button> 
            </Link>
            <Link href={"/transcation"}>
              <PenBox size={18}/>
              <Button className="flex items-center gap-2"> 
                <span>Add Transcation</span></Button> 
            </Link>
          </SignedIn>


          <SignedOut>
           <SignInButton forceRedirectUrl='/dashboard'>
          <Button className='h-12 w-40' variant="outline"> Login </Button> 
          </SignInButton>
          </SignedOut>
          <SignedIn>
          <UserButton appearance={{elements:{
            avatarBox:"w-10 h-10",
          },
          }}
          />
          </SignedIn>
          </div>

          </nav>
      </div>
  
  );
};

export default Header