'use client';

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.querySelector('.business-card')?.addEventListener('click', function() {
      document.querySelector('.business-card')?.classList.toggle('hover');
    });  
  }, []);

  return (
    <>
      <div className="business-card">
        <div className="flipper">
          <div className="front">
            <div className="name">
                <span className="first">Luis Javier Areiza Valencia</span> 
                <span className="last">Holding Aeroturex</span>
                <span className="title">Gerente Comercial Occidente</span>
              </div>
          </div>
          <div className="back">
            <div className="container-sm">
              <figure className="logo-white"></figure>
            </div>
            <div className="container-lg">
              <ul className="social fa-ul">
                <Image
                  src="/imagen.jpg"
                  alt="Whatsapp"
                  width="150"
                  height="150"
                  className="rounded-full m-auto mb-4"
                />
                <li><i className="fa fa-li fa-globe"></i><a href="https://www.aeroturex.com">Sitio web</a></li>
                <li><i className="fa fa-li fa-envelope"></i><a href="mailto:Comercial70@aeroturex.com">Comercial70@aeroturex.com</a></li>
                <li><i className="fa fa-li fa-phone"></i><a href="tel:+573016264584">(+57) 301 626 4584</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
