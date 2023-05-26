import { useRouter } from "next/router" 
import Link from "next/link"
import { CSSProperties } from "react"

export interface ActiveLinkProps {texto:string, href:string}

const style: CSSProperties = {
  color: 'rgb(95, 95, 95)',
  textDecoration: 'none',
}

export const ActiveLink = ({ texto, href }:ActiveLinkProps) => {
  
  const { asPath } = useRouter()

  return (
    <Link href={href} ><span style={ asPath === href ? style : undefined }>{texto}</span></Link>
  )
}
