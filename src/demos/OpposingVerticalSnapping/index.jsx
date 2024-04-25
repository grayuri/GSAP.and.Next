"use client"

import { useLayoutEffect, useRef, useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import './styles.scss'

gsap.registerPlugin(ScrollTrigger)

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function OpposingVerticalSnapping() {
  const verticalContainerRef = useRef(null)
  const leftSectionRef = useRef(null)
  const rightSectionRef = useRef(null)
  const footerRef = useRef(null)

  useIsomorphicLayoutEffect(() => {
    gsap.set(rightSectionRef.current, {
      y: window.innerHeight - leftSectionRef.current.clientHeight
    })

    gsap
    .timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: verticalContainerRef.current,
        start: "top top",
        end: "+=" + (leftSectionRef.current.clientHeight + window.innerHeight),
        pin: true,
        invalidateOnRefresh: true,
        scrub: true,
        markers: true
      }
    })
    .to(leftSectionRef.current, {
      y: window.innerHeight - leftSectionRef.current.clientHeight
    })
    .to(rightSectionRef.current, { y: 0 }, 0)

  },[])

  return (
    <main className='main'>
      <section className="hero">
        <div>
          <h1>GSAP ScrollTrigger Opposing Lateral Sections</h1>
          <p>The second section has two panels with a height bigger than the screen and they move in opposing directions.</p>
        </div>
      </section>
      <div id="verticalContainer" ref={verticalContainerRef}>
        <section className="left-section" ref={leftSectionRef}>
          <article>
            <h1>1</h1>
          </article>
          <article>
            <h1>2</h1>
          </article>
          <article>
            <h1>3</h1>
          </article>
          <article>
            <h1>4</h1>
          </article>
        </section>
        <section class="right-section" ref={rightSectionRef}>
          <article>
            <h1>5</h1>
          </article>
          <article>
            <h1>6</h1>
          </article>
          <article>
            <h1>7</h1>
          </article>
          <article>
            <h1>8</h1>
          </article>
        </section>
      </div>
      <footer ref={footerRef}>
        <h1>Enjoy!!!</h1>
      </footer>
    </main>
  )
}
