/**
 * Created by Alex.W on 2016/12/4.
 */


var connectionProvider = require('../../mysqlConnectionStringProvider.js');


var productCategoryDao = {

    createProductCategory: function(productCategory, onSuccessfulCallback) {

        var insertStatement = 'INSERT INTO productCategory SET?';


        var category = {

            CategoryName : productCategory.categoryName,
            Details : productCategory.details,
            IsValid : productCategory.isValid,
            CreateDate : new Date()

        };

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        if(connection) {

            connection.query(insertStatement, category, function(err, result) {

                if(err) {

                    onSuccessfulCallback({ status : 'successful'});

                    console.log(result)
                }
            })
        }
    }
}