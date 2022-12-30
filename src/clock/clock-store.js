import {readable} from "svelte/store"


const clock = readable(null, (set) => {
    const intervalNumber = setInterval(()=> {
        set(new Date()) ;
    }, 1000)

    return () => {
        clearInterval(intervalNumber) ;
    }
})

export default clock ; 