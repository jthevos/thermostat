const BASE_URL = "http://localhost:8000/"


const fetchZipCodeByID = async (zip_codeID) => {
  let url = `${BASE_URL}api/zip_codes/${zip_codeID}/`
  return await fetch(url)
    .then((response) => response.json())
}

const fetchZipCodes = async () => {
  let url = `${BASE_URL}api/zip_codes/`
  return await fetch(url)
    .then((response) => response.json())
}

const addZipCode = async (zip_codeObject) => {
  return await fetch(`${BASE_URL}api/zip_codes/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(zip_codeObject)
  }).then((response) => response.json())
}

const deleteZipCode = async (zip_codeID) => {
  return await fetch(`${BASE_URL}api/zip_codes/${zip_codeID}/`, {
    method: 'DELETE'
  }).then(() => {return {'success': true}})
}


const myExport = {
  fetchZipCodeByID,
  fetchZipCodes,
  addZipCode,
  deleteZipCode
}

export default myExport