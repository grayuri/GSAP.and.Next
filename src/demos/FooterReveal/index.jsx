"use client"

import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './styles.scss';

gsap.registerPlugin(ScrollTrigger)

export default function FooterReveal() {
  const [footerTop, setFooterTop] = useState(0)
  const footerRef = useRef(null)
  
  useLayoutEffect(() => {
    const abortController = new AbortController()

    const footerTopPosition = footerRef.current.offsetTop
    setFooterTop(footerTopPosition)

    const overlap = Math.min(window.innerHeight - footerTop)
    
    footerRef.current.style.marginTop = -overlap + "px"
  
    ScrollTrigger.create({
      trigger: footerRef.current,
      start: () => "top " + (window.innerHeight - overlap),
      end: () => "+=" + overlap,
      pin: true,
      markers: true
    })

    return () => abortController.abort()

  },[])

  

  return (
    <main>
      <section class="site-main panel orange">
        <h1>Footer reveal using ScrollTrigger</h1>
        <p>The footer acts like its getting revealed from underneath the main site content using ScrollTrigger and it dynamically adjusts based on the size of the window and the footer.</p>
        <p>(Scroll down)</p>
      </section>

      <footer 
        ref={footerRef}
      >
        <div class="panel dark center">
          Footer (part 1)
        </div>
        <div class="panel blue center">
          Footer (part 2)
        </div>
      </footer>
    </main>
  )
}
