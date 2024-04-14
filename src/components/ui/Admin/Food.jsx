import React from 'react';
import { apiRoute } from '../../../api/api';
import { food, getFood } from '../../../fakedata/food';
import RightPanel from '../RightPanel/RightPanel';
import axios from "axios"
import { useNotification } from '../../../hooks/useNotification';
import Card from '../Card/Card';

const Food = () => {

    const [panel, setPanel] = React.useState(false)
    const [editPanel, setEPanel] = React.useState(false)
    const [currentFood, setCFood] = React.useState({})

    const CreateForm = () => {

        const [category, setCat] = React.useState("drinks")
        const [price, setPrice] = React.useState("")
        const [title, setTitle] = React.useState("")

        const create = async() => {
            if (title == "" || category == "" || price == "") return
            const data = { title, category, price }
            try {
                const req = await axios.post(apiRoute("/products/create"), { ...data })
                if (req.status === 200) {
                    useNotification("success", "Товар добавлен")
                    setPanel(false)
                }
            } catch(err) {
                console.log(err)
            }
        }
        

        return (
            <div className="form">
                <h1>Добавление товара</h1>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control mt-3" placeholder='Название' />
                <select className='form-control mt-2' onChange={e => setCat(e.target.value)}>
                    <option value={"drinks"}>Напитки</option>
                    <option value={"bakery"}>Выпечка</option>
                    <option value={"hot"}>Горячее</option> 
                </select>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="form-control mt-2" placeholder='Цена, руб' />
                <button onClick={create} className="btn btn-success btn-sm btn-block mt-2">Создать</button>
            </div>
        )
    }

    const EditForm = (props) => {
    
        const [category, setCat] = React.useState(currentFood.category || "drinks")
        const [price, setPrice] = React.useState(currentFood.price || 0)
        const [title, setTitle] = React.useState(currentFood.title || "")

        const save = async() => {
            console.log(currentFood._id);
            if (category == "" || price == "" || title == "") return
            try {
                const req = await axios.put(apiRoute(`/products/${currentFood._id}`), {
                    category, title, price
                })
                console.log(req)
                if (req.status === 200) {
                    useNotification("success", "Изменения сохранены")
                    props.onClose()
                }
            } catch (err) {
                console.log(err)
            }
        }

        return (
            <div className="form">
                <h1>Редактирование товара</h1>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control mt-3" placeholder='Название' />
                <select value={category} className='form-control mt-2' onChange={e => setCat(e.target.value)}>
                    <option value={"drinks"}>Напитки</option>
                    <option value={"bakery"}>Выпечка</option>
                    <option value={"hot"}>Горячее</option> 
                </select>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="form-control mt-2" placeholder='Цена, руб' />
                <button onClick={save} className="btn btn-success btn-sm btn-block mt-2">Сохранить изменения</button>
            </div>
        )
    }

    const edit = (data) => {
        setCFood(data)
        setEPanel(true)
    }

    const remove = async(data) => {
        if (window.confirm("Подтвердите удаление")) {
            try {
                const req = await axios.delete(apiRoute(`/products/${data._id}`))
                useNotification("danger", "Товар удален")
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div className='admin-food'>
            <button className="btn btn-warning btn-sm" onClick={() => setPanel(true)}>+ Добавить товар</button>
            <div className="admin-food_inner">
                {food?.map(i => (
                    <Card key={i._id} data={i} isAdmin={true} onEdit={edit} onRemove={remove} />
                ))}
            </div>
            <RightPanel 
                active={panel}
                content={<CreateForm />}
                mobileTransform={800}
                onClose={() => setPanel(false)}
            />
            <RightPanel 
                active={editPanel}
                content={<EditForm />}
                mobileTransform={800}
                onClose={() => setEPanel(false)}
            />
        </div>
    );
}

export default Food;
