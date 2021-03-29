//1





let jcwintro = gsap.timeline({
    scrollTrigger: {
        trigger: '.jcwlogo',
        start: '-25% 70%',
        end: '10% 50%',
        scrub: 1,



    }
});

jcwintro
    .from('.jcwlogo', { y: 200, opacity: -1, duration: 10 })
    .fromTo('.line', { opacity: 0, duration: 5 }, { opacity: .6, duration: 5 })
    .from('.p_left', { x: 500, opacity: 0, duration: 3 }, '-=1')
    .from('.p_right', { x: -500, opacity: 0, duration: 3 }, '-=3')




let histoy_board = gsap.timeline({
    scrollTrigger: {
        trigger: '.jcw_contain2',
        start: '90% 80%',
        end: '70% -80%',
        scrub: 1,
markers:true,
    }
})

histoy_board.fromTo('.history', { x: 0 }, { x: -1500 })




//3
gsap.to('.curtain', {
    opacity: 0.6,
    scrollTrigger: {
        trigger: '.jcw_contain4',
        start: '50% 70%',
        end: '75% 70%',
        scrub: true,
    }
})

let wmh = gsap.timeline({
    scrollTrigger: {
        trigger: '.jcw_contain4',
        start: '0% 70%',
        end: '0% 20%',
        scrub: true,
    }
})

wmh.from('.jcw_contain4_item>h2', { y: 200, opacity: -2, duration: 1 })
    .from('.history1', { y: 200, opacity: -2, duration: 2 }, '-=1')
    .from('.history2', { y: 200, opacity: 0 })



//4

let video = gsap.timeline({
    scrollTrigger: {
        trigger: '.jcw_contain5',
        start: '65% 80%',
        end: '65% -100%',
        scrub: 1,
        pin: true,
    }
})

video.from('.video', { opacity: 0, scale: 3 })
    .from('.video_title_L', { y: -100, opacity: 0 }, '-=.2')
    .from('.video_title_R', { y: 100, opacity: 0 }, '-=.5')




//5
let mmt = gsap.timeline({
    scrollTrigger: {
        trigger: '.wmh',
        start: '45% 80%',
        end: '70% 50%',
        scrub: 1,
    }
})

mmt.from('.mini>span', { opacity: 0.1 }, '-=2')
    .from('.maximised>span', { opacity: 0.1 }, '-=2')
    .from('.thrill>span', { opacity: 0.1 }, '-=.5')

gsap.to('.maximised_l', {
    x: -500, opacity: 0,
    scrollTrigger: {
        trigger: '.wmh',
        start: '10% 80%',
        end: '80% 0%',
        scrub: 1,
    }
})

gsap.from('.maximised_r', {
    x: -500, opacity: 0,
    scrollTrigger: {
        trigger: '.wmh',

        start: '10% 80%',
        end: '80% 0%',
        scrub: 1,
    }
})


//6
let peakperform2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.odd1',
        start: '-20% 60%',
        end: '25% 40%',
        scrub: 1,
    }
})

peakperform2.from('.odd1>img', { opacity: 0 })
    .from('.odd1>.peak_performance_datail_odd>div>h3', { y: 50, opacity: 0 })
    .from('.odd1>.peak_performance_datail_odd>div>p', { x: -50, opacity: 0 }, '-=.5')


//7
let peakperform = gsap.timeline({
    scrollTrigger: {
        trigger: '.peak_performance_contain_even',
        start: '-20% 60%',
        end: '25% 40%',
        scrub: 1,
    }
})

peakperform.from('.peak_performance_contain_even>img', { opacity: 0 })
    .from('.peak_performance_datail_even>div>h3', { y: 50, opacity: 0 })
    .from('.peak_performance_datail_even>div>p', { x: 50, opacity: 0 }, '-=.5')



// 8
let peakperform3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.odd2',
        start: '-20% 60%',
        end: '25% 40%',
        scrub: 1,
    }
})

peakperform3.from('.odd2>img', { opacity: 0 })
    .from('.odd2>.peak_performance_datail_odd>div>h3', { y: 50, opacity: 0 })
    .from('.odd2>.peak_performance_datail_odd>div>p', { x: -50, opacity: 0 }, '-=.5')
