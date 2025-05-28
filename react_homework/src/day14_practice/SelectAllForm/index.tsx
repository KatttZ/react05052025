import React, { useState } from "react";

export default function SelectAllForm() {
  const items = ["item1", "item2", "item3"];
  const [selected, setSelected] = useState([])


  const handleSelectAll = () => {
    if(selected.length === items.length){
      setSelected([])
    }else{//@ts-ignore
      setSelected([...items])
    }
  }

  const handleSelectItem = (item:any) => {//@ts-ignore
    setSelected(s => {//@ts-ignore
      if(s.includes(item)){
        return s.filter(i => i !== item)
      }else{
        return [...s, item]
      }
    })
  }
//@ts-ignore
  const isChecked = (item:any) => selected.includes(item);
  const isAllSelected = selected.length === items.length;

  return (
    <div>
      <h2>All the selected Items:</h2>
      {selected && <div>{selected.join(", ")}</div>}
      <label>
        <input type="checkbox" checked={isAllSelected} onChange={handleSelectAll}/>
        SelectAll
      </label><br/>
     {
      items.map(item => <label key={item}><input type="checkbox" checked={isChecked(item)} onChange={()=>handleSelectItem(item)}/>{item}</label>)
     }
    </div>
  );
}
