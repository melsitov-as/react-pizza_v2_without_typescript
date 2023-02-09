import React, {useState} from "react";

export default function Categories() {
	const [activeIndex, setActiveIndex] = useState(0)

	const categories = [
		'Все',
		'Мясные',
		'Вегетарианские',
		'Гриль',
		'Острые',
		'Закрытые'
	]

	const onClickCategory = (index) => {
		setActiveIndex(index);
	}

	return (
		<div className="categories">
			<ul>
				{
					categories.map((value, index) => (<li onClick={() => onClickCategory(index)} className={activeIndex === index ? 'active' : ''}>{value}</li>))
				}
				
			</ul>
		</div>
	);
}