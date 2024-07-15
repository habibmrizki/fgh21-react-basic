import React from "react";

function Table() {
  const [data, setData] = React.useState([
    {
      id: 1234,
      name: "habib",
      umur: 22,
      gender: "Laki-laki",
      perokok: true,
      jenisRokok: ["Malboro", "Esse"],
    },
    {
      id: 1235,
      name: "Rizki",
      umur: 21,
      gender: "Laki-laki",
      perokok: true,
      jenisRokok: ["Malboro", " Berry Pop"],
    },
  ]);

  function response(event) {
    event.prevenDefault();
    const name = event.target.name.value;
    const umur = event.target.umur.value;
    const gender = event.target.gender.value;
    const perokok = event.target.gender.value;
    const newData = [...data];
    newData.push({
      id: Math.round(Math.random() * 9999),
      name,
      umur,
      gender,
      perokok,
      jenisRokok,
    });
    setData(newData);
    console.log(newData);
  }

  return (
    <div>
      <form className="form-style" onSubmit={response}>
        <div>
          <label htmlFor="name">Nama</label>
          <div>
            <input type="text" id="name" className="input-name" />
          </div>
        </div>
        <div>
          <label htmlFor="umur">umur</label>
          <div>
            <input type="text" id="umur" className="input-umur" />
          </div>
        </div>
        <div>
          <div>Apa jenis kelamin anda?</div>
          <div>
            <input type="radio" id="male" name="gender" value="Laki-laki" />
            <label htmlFor="male">Laki-laki</label>
          </div>
          <div>
            <input type="radio" id="female" name="gender" value="Perempuan" />
            <label htmlFor="female">Perempuan</label>
          </div>
        </div>
        <div>
          <div>Apa anda merokok?</div>
          <div>
            <input type="radio" id="yes" name="smoke" value="Ya" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div>
            <input type="radio" id="no" name="smoke" value="TIdak" />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <div>
          <div>Jika anda perokok, jenis rokok apa yang anda pakai?</div>
          <div>
            <input
              type="checkbox"
              id="gudang-garam-filter"
              name="smoker"
              value="Gudang Garam Filter"
            />
            <label htmlFor="gudang-garam-filter">Gudang Garam Filter</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="lucky-strike"
              name="smoker"
              value="Lucky Strike"
            />
            <label htmlFor="lucky-strike">Lucky Strike</label>
          </div>
          <div>
            <input type="checkbox" id="malboro" name="smoker" value="Malboro" />
            <label htmlFor="malboro">Malboro</label>
          </div>
          <div>
            <input type="checkbox" id="esse" name="smoker" value="Esse" />
            <label htmlFor="esse">Esse</label>
          </div>
        </div>
        <button type="button">Save</button>
      </form>
      <table
        className="table"
        border={1}
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Umur</th>
            <th>Gender</th>
            <th>Perokok</th>
            <th>JenisRokok</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={`survey-${item.id}`}>
                <td>{item.name}</td>
                <td>{item.umur}</td>
                <td>{item.gender}</td>
                <td>{item.perokok ? "ya" : "tidak"}</td>
                <td>{item.jenisRokok}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
