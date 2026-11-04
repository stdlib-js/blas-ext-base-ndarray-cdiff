"use strict";var C=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var B=C(function(J,A){
var E=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),n=require('@stdlib/ndarray-base-numel-dimension/dist'),o=require('@stdlib/ndarray-base-stride/dist'),d=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),F=require('@stdlib/blas-ext-base-cdiff/dist').ndarray;function G(a){var r,e,v,i,s,p,q,c,x,f,w,g,k,l,m,N,D,O,S,b,h,j,t,z;return t=a[0],e=a[1],v=a[2],i=a[3],r=a[4],z=E(a[5]),j=n(t,0),O=n(e,0),D=n(v,0),h=u(t),f=u(e),N=u(v),k=u(i),q=u(r),b=o(t,0),x=o(e,0),m=o(v,0),g=o(i,0),p=o(r,0),S=d(t),c=d(e),l=d(v),w=d(i),s=d(r),F(j,z,h,b,S,O,f,x,c,D,N,m,l,k,g,w,q,p,s),i}A.exports=G
});var H=B();module.exports=H;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
