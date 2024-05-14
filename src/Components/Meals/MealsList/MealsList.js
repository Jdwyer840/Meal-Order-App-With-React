import MealsItem from "../MealsItem/MealsItem";
const MealsList = (props) => {
    return (
        <ul className={props.className}>
            {props.mealItems.map(mealItem => {
               return (
                   <li>
                    <MealsItem
                        name={mealItem.name}
                        description={mealItem.description}
                        price={mealItem.price}
                        mealID={mealItem.id}
                        mealItem={mealItem}
                    />
                   </li>
               )
            })}
        </ul>
    )
}

export default MealsList;