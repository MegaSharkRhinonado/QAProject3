//SComp03 fetches record and transform reponse, returning an array of object per record

export default async function SComp03() {

    const body = {
      'app': kintone.app.getId(),
      'query': 'order by $id asc'
    };
  
    const resp = await kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body
    );
    let listItemArray = [];
  
    let respRecords = resp.records; // array of records (objects)
  
    listItemArray = respRecords.map(function (record) {
      return {
        uniqueKey: record.$id.value, // $id = Automatically generated Record ID
        author: record.author.value,
        title: record.title.value
      }
    });
  
    console.log('listItemArray: \n', listItemArray);
  
    // Used in setListItems() and setSearchResults() in index.js
    return listItemArray;
  };