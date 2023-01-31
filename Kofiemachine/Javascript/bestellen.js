const response = await fetch("https://jmapi.bacbat32.com/orders/", {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: `{
   "Type_drank": "string",
   "soort_koffie": "string",
   "soort_thee": "string",
   "type_bonen": "string"
  }`,
});

response.json().then(data => {
  console.log(data);
});
