import Link from 'next/link'
const linkStyle={
    paddingLeft:30
}
const header=()=>(
    <div>
        <Link href='/'>
            <a style={{color:'#f40',paddingLeft:30}}>首页</a> 
        </Link>
        <Link href='/about'>
            <a style={{color:'#f40',paddingLeft:30}}>萍乡</a> 
        </Link>
    </div>
)
export default header