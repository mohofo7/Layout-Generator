const parseString = (str)=>{

    let slotList = str.split(/\//);
    let slots = []
    slotList.forEach(element => {
        let slot = element.split(/(\d+)/)
        if(slot.length === 1)
            slots.push(slot[0])
        else for(let i = 0;i < slot[1];i++)
            slots.push(slot[2])
    });
    return slots
}

export default parseString