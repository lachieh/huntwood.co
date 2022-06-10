import type { MotionProps } from 'framer-motion'
import type { MetaFunction, LinksFunction } from 'remix'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutlet } from 'react-router'
import { useLocation } from 'remix'
import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from 'remix'
import HeroImage from '~/components/HeroImage'
import Intro from '~/components/Intro'
import Nav from '~/components/Nav'
import NavSecondary from '~/components/NavSecondary'
import fontStyles from '~/styles/fonts.css'
import tailwindStyles from '~/styles/tailwind.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: fontStyles },
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Mitchalie',
  viewport: 'width=device-width,initial-scale=1',
})

export const pageAnimation: MotionProps = {
  transition: { duration: 0.5, ease: 'easeInOut' },
  initial: { x: '-100%', rotate: '-10deg' },
  animate: { x: '0', rotate: '0deg' },
  exit: { x: '100%', rotate: '10deg' },
}

export default function App() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script>
window['_fs_debug'] = false;
window['_fs_host'] = 'fullstory.com';
window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
window['_fs_org'] = 'o-1B4G99-na1';
window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
    o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
    g.anonymize=function(){g.identify(!!0)};
    g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
    g.log = function(a,b){g("log",[a,b])};
    g.consent=function(a){g("consent",!arguments.length||a)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
    g.setVars=function(n, p){g('setVars',[n,p]);};
    g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
    if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
    g._v="1.3.0";
})(window,document,window['_fs_namespace'],'script','user');
</script>
      </head>
      <body className="overflow-x-hidden">
        <Nav />
        <aside>
          <Intro />
          <HeroImage />
        </aside>
        <NavSecondary />
        <AnimatePresence exitBeforeEnter>
          <motion.div key={location.pathname} {...pageAnimation}>
            {outlet}
          </motion.div>
        </AnimatePresence>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
