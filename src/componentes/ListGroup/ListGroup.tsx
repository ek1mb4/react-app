import {Fragment, useState} from "react";
import {ListHeader} from "./ListHeader.tsx";
import {goals} from "../../db/fake.db.ts";
import {ListItem} from "./ListItem.tsx";
import {SnackBar} from "../Alerts/SnackBar.tsx";
import styles from "./ListGroup.module.css"
import {BtnPrime} from "../Buttons/BtnPrime.tsx";
import {LikeBtn} from "../LikeBtn/LikeBtn.tsx";
import {produce} from "immer";

export const ListGroup = () => {

    const [itemIndex, setItemIndex] = useState(-1);
    const [alertActive, setAlertActive] =  useState(false);
    const [family, setFamily] = useState(
        [
            {
                name: 'Ngueve',
                relation: 'sister',
                alive: true,
            },
            {
                name: 'Eliseu',
                relation: 'bother',
                alive: true,
            },
            {
                name: 'Njamba',
                relation: 'bother',
                alive: false,
            },
            {
                name: 'Carlitos',
                relation: 'bother',
                alive: false,
            }
        ]
    )
    const message = goals.length === 0 && 'There no goals to show. Sorry!';
    const [pizza, setPizza] = useState({
        name: 'Spicy Pepperoni',
        toppings:['Mushrrom']
    })

    const [cart, setCart] = useState({
        discount: .1,
        items: [
            {
                id: 1, title: 'Avocado', quantity: 1,
            },
            {
                id: 2, title: 'Tomato', quantity: 1,
            }
        ]
    });




    function addMember(){
        setFamily(
            produce((newFamily)=> {
                newFamily.push({
                    name: 'Nanda',
                    relation: 'sister',
                    alive: true,
                })
            })
        )
    }

    function editMember(index: number){
        setFamily(produce((familyMembers)=> {
            const oldMember = familyMembers[index];
            if(oldMember){
                oldMember.alive = !oldMember.alive
            }
        }))
    }

    function changeItemIndex(i: number) {
        setItemIndex(i);
        setPizza({
            name: 'Cheese',
            toppings: [...pizza.toppings]

        });
    }

    function addItemQty(id: number){
        setCart({...cart,
            items: cart.items.map(
                (item) =>
                item.id === id
                    ? {...item, quantity: item.quantity + 1}: item)})
    }
    function familyList(){
      return family.map((item, index) =>
          <li className={'flex justify-between w-full shadow p-2 mb-2 cursor-pointer'}>
              <span>{item.name}</span>
              <span>{item.relation}</span>
              <span onClick={()=> editMember(index)}>{item.alive ? '✔️': '❌'}</span>
          </li>)
    }

    function showAlert(show){
        setAlertActive(show)
    }
    return (
        <Fragment>
            <ul>
                {
                 familyList()
            }
            </ul>

            <div>{pizza.toppings.map(t => <p>{t}</p>)}</div>
            <div onClick={addMember}><LikeBtn /></div>
            <BtnPrime>Save</BtnPrime>
            <SnackBar alertActive={alertActive} showAlert={showAlert}  />
            <div className={[styles.myClass, styles.yourClass].join(' ')}>
                <button className={'border-indigo-500 m-2'} onClick={()=> showAlert(true)}>Alert me now please</button>
            </div>
            <ListHeader/>
            {
                goals.map((goal, index)=> {
                    return <ListItem goal={goal} key={index} index={index} changeIndex={changeItemIndex} selectedIndex={itemIndex} />
                })
            }
            {message}
        </Fragment>
    );
};
