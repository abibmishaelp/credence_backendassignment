//Getting Details
exports.dashboard = async (req) => {
  let dbclient;
  const collection = req.app.locals.collection;
  try {
    dbclient = await collection.find({}).toArray().
      then(response => {
        return response;
      }).catch(e => {
        throw e;
      });
    console.log("result", dbclient);
    return dbclient
  } catch (error) {
    return error;
  }
}

//Creating Function
exports.create = async (req) => {
  let dbclient;
  const collection = req.app.locals.collection;
  try {
    dbclient = await collection.insert({
      "name": req.body.name,
      "img": req.body.img,
      "summary": req.body.summary
    }).then(response => {
      return response;
    }).catch(e => {
      throw e;
    });
    console.log("result", dbclient);
    return dbclient
  } catch (error) {
    return error;
  }
}

//Editing Function
exports.edit = async (req) => {
  let dbclient;
  const collection = req.app.locals.collection;
  try {
    let query = req.body._id;
    let updateQuery = {
      $set: {
        "name": req.body.name,
        "img": req.body.img,
        "summary": req.body.summary,
      }
    }
    console.log("query", req.body._id, JSON.stringify(query), JSON.stringify(updateQuery));
    dbclient = await collection.updateMany(
      query,
      updateQuery).catch(e => {
        throw e;
      });
    console.log("result", dbclient);
    return dbclient
  } catch (error) {
    return error;
  }
}

//Deleting Function
exports.delete = async (req) => {
  let dbclient;
  const collection = req.app.locals.collection;
  try {
    console.log("result", req.body.name);
    dbclient = await collection.deleteMany({ "name": req.body.name });
    console.log("result", dbclient.deletedCount);
    if (dbclient.deletedCount > 0) {
      return "Deleted Successfully";
    } else {
      return "Not Found";
    }
  } catch (error) {
    return error;
  }
}


