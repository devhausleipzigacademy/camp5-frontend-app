import { createIcon } from "@chakra-ui/icons"

export const Icon = createIcon({
    displayName: "TestIcon",
    viewBox: "0 0 24 24",
    path: (
        <>
        <g fill="none" stroke="#626262" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5px"></g>
        <g 
        fill="none" 
        stroke="#626262" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="1.5px">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z" 
            stroke="#626262" 
            fill="none" 
            stroke-width="1.5px"></path>
            <path d="M15 8.5c-.685-.685-1.891-1.161-3-1.191M9 15c.644.86 1.843 1.35 3 1.391m0-9.082c-1.32-.036-2.5.561-2.5 2.191c0 3 5.5 1.5 5.5 4.5c0 1.711-1.464 2.446-3 2.391m0-9.082V5.5m0 10.891V18.5" 
        stroke="#626262" 
        fill="none" 
        stroke-width="1.5px"></path></g></>
    )
})