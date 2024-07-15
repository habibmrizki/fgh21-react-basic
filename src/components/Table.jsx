import React from "react";

function Survey(item) {
  const [data, setData] = React.useState([
    {
      id: 1234,
      name: "Habib",
      age: 22,
      gender: "Laki-laki",
      isSmoker: true,
      cigar: ["Gudang Garam", "Marlboro"],
    },
    {
      id: 1235,
      name: "Budi",
      age: 40,
      gender: "Laki-laki",
      isSmoker: true,
      cigar: ["Esse", "Lucky Strike"],
    },
  ]);

  function response(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const age = event.target.age.value;
    const gender = event.target.gender.value;
    const isSmoker = event.target.isSmoker.value;
    let cigar = [];
    for (let i = 0; i < cigar.length; i++) {
      if (cigar[i].checked) {
        cigar.push(cigar[i].value);
      }
    }

    console.log(cigar);

    const newData = [...data];
    newData.push({
      id: Math.round(Math.random() * 999),
      name,
      age,
      gender,
      isSmoker,
      cigar,
    });
    setData(newData);
  }
  return (
    <div className="container-survey">
      <form onSubmit={response}>
        <div>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <div>
            <label htmlFor="age">Age</label>
          </div>
          <input type="number" id="age" name="age" />
        </div>
        <div>
          <div>Gender</div>
          <input type="radio" name="gender" id="male" value={"Laki-laki"} />
          <label htmlFor="male">Laki-laki</label>
          <input type="radio" name="gender" id="female" value={"Perempuan"} />
          <label htmlFor="female">Perempuan</label>
        </div>
        <div>
          <div>Apakah Anda Perokok?</div>
          <input type="radio" name="isSmoker" id="yes" value={"Ya"} />
          <label htmlFor="yes">Ya</label>
          <input type="radio" name="isSmoker" id="no" value={"Tidak"} />
          <label htmlFor="no">Tidak</label>
        </div>
        <div>
          <div>Jenis Rokok</div>
          <div>
            <input type="checkbox" name="cigar" id="marl" value={"Marlboro"} />
            <label htmlFor="marl">Marlboro</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="cigar"
              id="gudang"
              value={"Gudang Garam"}
            />
            <label htmlFor="gudang">GudangGaram</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="lucky-strike"
              name="smoker"
              value="Lucky Strike"
            />
            <label for="lucky-strike">Lucky Strike</label>
          </div>
          <div>
            <input type="checkbox" name="cigar" id="esse" value={"Esse"} />
            <label htmlFor="esse">Esse</label>
          </div>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
      <table border={1} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Is Smoke</th>
            <th>Cigar Variant</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={"survey-" + item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.isSmoker ? "Ya" : "Tidak"}</td>
                <td>{item.cigar}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Survey;
