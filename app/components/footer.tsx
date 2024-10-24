import Link from 'next/link';
export default function Footer (){
    return (
        <div className="flex justify-around bg-red-500">
            <h1 className="text-2xl text-red-500 font-bold">
                copyright 2024
            </h1>
            <h2>
                <ul className="flex gap-x-20">
                <li className="text-blcak-500"><Link href="https://www.facebook.com/">facebook</Link>
                   
                    </li>
                    <li>
                    <Link href="https://www.instagram.com/">instagram</Link>
                    </li>
                    <li > <Link href="https://www.youtube.com/">youtube</Link>
                    
                    </li>                
                </ul>
            </h2>
        </div>
    )
}
