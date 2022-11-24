module.exports = {
    //제품판매 리스트
    productList : {
        query: `SELECT
                    t1.*
                    , t2.path
                    , t3.category1
                    , t3.category2
                    , t3.category3 
                FROM 
                    t_product t1, t_image t2, t_category t3
                WHERE t1.id = t2.product_id 
                AND	t2.type = 1
                AND	t1.category_id = t3.id`
    },
    //제품판매 리스트2
    productList2 : {
        query: `SELECT t3.*, t4.path FROM (SELECT t1.*, t2.category1, t2.category2, t2.category3
            FROM t_product t1, t_category t2
            WHERE t1.category_id = t2.id) t3
            left join (SELECT * FROM t_image WHERE type=1) t4
            on t3.id = t4.product_id`
    },
    /*상세 페이지*/
    //조회
    productDetail: {
        query: `SELECT
                    t1.*
                    , t2.path
                    , t3.category1
                    , t3.category2
                    , t3.category3 
                FROM 
                    t_product t1, t_image t2, t_category t3
                WHERE t1.id = ?
                AND	t1.id = t2.product_id
                AND	t2.type = 3
                AND	t1.category_id = t3.id`
    },
    //메인이미지 다건 나오는
    productMainImages: {
        query: `SELECT * FROM t_image WHERE product_id = ?`
    },

    /*제품등록 set ?를 쓰면 키-value가 알아서 들어감*/
    productInsert: {
        query: `INSERT INTO t_product set ?`
    },
    productImageInsert: {
        query: `INSERT INTO t_image set ?`
    },
    imageList: {
        query: `select * from t_image where product_id=?`
    },
    imageListMaxId: {
        query: `SELECT max(id) as id FROM t_image`
    },
    imageDelete: {
        query: `delete from t_image where id=?`
    },    
    productDelete: {
        query: `DELETE FROM t_product WHERE id=?`
    },
    sellerList : {
        query: `select * from t_seller`
    },
    categoryList : {
        query: `select * from t_category`
    },
    signUp: {
        query: `INSERT INTO t_user SET ? ON DUPLICATE KEY UPDATE ?`
    },
    cartInsert: {
        query: `INSERT INTO t_cart SET product_id = ?, product_name = ?, product_price = ?, delivery_price =?, buyer_id =?, category_id = ?, tags = ?, path = ?`
    },
    cartList: {
        query: `SELECT * FROM t_cart WHERE buyer_id = ?`
    },
    cartListDelete: {
        query: `DELETE FROM t_cart WHERE buyer_id = ? AND product_id=?`
    },
    
}