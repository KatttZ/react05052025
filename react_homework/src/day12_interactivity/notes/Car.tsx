export const cars = [
  { id: 1, year: 2025, name: "Honda" ,model:"Model1"},
  { id: 2, year: 2024, name: "Honda" ,model:"Model2"},
  { id: 3, year: 2023, name: "Honda" ,model:"Model3"},
];


export function Car(props: any) {
  const { name, year, model } = props;

  return (
    <div>
      <div style={{ color: "blue" }}>Name: {name}</div>
      <div>Year: {year}</div>
      <div>Model: {model}</div>
    </div>
  );
}


export default function CarList(){
      return (
    <div>
      {/* <Car
        name="Toyota"
        year={2023}
        model="Corolla"
        owner={{ id: 1, name: "Bob" }}
      /> */}

      {/* <ul>
        {cars.map(car => <li key={car.id}>{car.year} {car.name} {car.model}</li>)}
      </ul> */}

      {cars.map(({id, name, year, model}) => 
        <Car key={id} name={name} year={year} model={model}/>
      )}

    </div>
  );
}