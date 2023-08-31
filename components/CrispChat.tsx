'use client'

import { useEffect } from "react"
import {Crisp} from "crisp-sdk-web"

export const CrispChat = () => { 

    useEffect(() => {
        Crisp.configure("415754b9-aada-4a90-a333-6cac1fff41e3")
    }, [])

    return null
}