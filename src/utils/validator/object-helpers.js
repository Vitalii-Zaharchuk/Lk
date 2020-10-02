export const updateObjectInArray = (items,objPropName,itemId,newObgProps) =>{
   return items.map(u=>{
    if(u[objPropName] === itemId){
        return{...u,...newObgProps}
        
    }
    return u
})

}