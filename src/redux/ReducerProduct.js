import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './Action';
const initialState = [
    {
        id: 1,
        urlLink: '',
        nameProduct: 'Giày Thể Thao Nam MWC NATT - 5272',
        detail: "Giày Thể Thao Nam MWC NATT - 5328 là mẫu giày được thiết kế theo phong cách hiện đại, màu sắc khỏe khoắn, sang trọng mang đến cho bạn 1 diện mạo hoàn toàn cá tính. Đặc biệt sản phẩm sử dụng chất liệu cao cấp có độ bền tối ưu giúp bạn thoải mái trong mọi hoàn cảnh.  Chất liệu cao cấp : thoáng khí cả mặt trong lẫn mặt ngoài khiến người mang luôn cảm thấy dễ chịu dù hoạt động trong thời gian dài.   Thiết kế thông minh:     - Giày có trọng lượng nhẹ.    - Lớp lót có lỗ thông hơi giúp đôi giày luôn thoáng khí, không gây hầm bí hay khó chịu khi mang.   - Đặc biệt phần đế được làm bằng cao su tổng hợp, êm ái, thiết kế chống trơn trượt cực kì hiệu quả . Thích hợp với mọi hoạt động: Sản phẩm thích hợp cho các hoạt động thể thao như: đi bộ, chạy bộ, đi làm, đi chơi hay tập luyện, ....",
        price: '500000',
        total: 100,
        rest: 99,

    }, {
        id: 2,
        nameProduct: 'Giày Thể Thao Nam MWC NATT - 555',
        urlLink: '',
        detail: "Giày Thể Thao Nam MWC NATT - 5328 là mẫu giày được thiết kế theo phong cách hiện đại, màu sắc khỏe khoắn, sang trọng mang đến cho bạn 1 diện mạo hoàn toàn cá tính. Đặc biệt sản phẩm sử dụng chất liệu cao cấp có độ bền tối ưu giúp bạn thoải mái trong mọi hoàn cảnh.  Chất liệu cao cấp : thoáng khí cả mặt trong lẫn mặt ngoài khiến người mang luôn cảm thấy dễ chịu dù hoạt động trong thời gian dài.   Thiết kế thông minh:     - Giày có trọng lượng nhẹ.    - Lớp lót có lỗ thông hơi giúp đôi giày luôn thoáng khí, không gây hầm bí hay khó chịu khi mang.   - Đặc biệt phần đế được làm bằng cao su tổng hợp, êm ái, thiết kế chống trơn trượt cực kì hiệu quả . Thích hợp với mọi hoạt động: Sản phẩm thích hợp cho các hoạt động thể thao như: đi bộ, chạy bộ, đi làm, đi chơi hay tập luyện, ....",
        price: '600000',
        total: 100,
        rest: 10,

    }, {
        id: 3,
        nameProduct: 'Giày Thể Thao Nam MWC NATT - 999',
        urlLink: '',
        detail: "Giày Thể Thao Nam MWC NATT - 5328 là mẫu giày được thiết kế theo phong cách hiện đại, màu sắc khỏe khoắn, sang trọng mang đến cho bạn 1 diện mạo hoàn toàn cá tính. Đặc biệt sản phẩm sử dụng chất liệu cao cấp có độ bền tối ưu giúp bạn thoải mái trong mọi hoàn cảnh.  Chất liệu cao cấp : thoáng khí cả mặt trong lẫn mặt ngoài khiến người mang luôn cảm thấy dễ chịu dù hoạt động trong thời gian dài.   Thiết kế thông minh:     - Giày có trọng lượng nhẹ.    - Lớp lót có lỗ thông hơi giúp đôi giày luôn thoáng khí, không gây hầm bí hay khó chịu khi mang.   - Đặc biệt phần đế được làm bằng cao su tổng hợp, êm ái, thiết kế chống trơn trượt cực kì hiệu quả . Thích hợp với mọi hoạt động: Sản phẩm thích hợp cho các hoạt động thể thao như: đi bộ, chạy bộ, đi làm, đi chơi hay tập luyện, ....",

        price: '900000',
        total: 0,
        rest: 90,

    },
    {
        id: 4,
        urlLink: 'https://product.hstatic.net/1000295889/product/634x634_0c219ad06ae441319c913590361550cf_master.png',
        nameProduct: 'Giày Thể Thao Nam MWC NATT - 5272',
        detail: "Giày Thể Thao Nam MWC NATT - 5328 là mẫu giày được thiết kế theo phong cách hiện đại, màu sắc khỏe khoắn, sang trọng mang đến cho bạn 1 diện mạo hoàn toàn cá tính. Đặc biệt sản phẩm sử dụng chất liệu cao cấp có độ bền tối ưu giúp bạn thoải mái trong mọi hoàn cảnh.  Chất liệu cao cấp : thoáng khí cả mặt trong lẫn mặt ngoài khiến người mang luôn cảm thấy dễ chịu dù hoạt động trong thời gian dài.   Thiết kế thông minh:     - Giày có trọng lượng nhẹ.    - Lớp lót có lỗ thông hơi giúp đôi giày luôn thoáng khí, không gây hầm bí hay khó chịu khi mang.   - Đặc biệt phần đế được làm bằng cao su tổng hợp, êm ái, thiết kế chống trơn trượt cực kì hiệu quả . Thích hợp với mọi hoạt động: Sản phẩm thích hợp cho các hoạt động thể thao như: đi bộ, chạy bộ, đi làm, đi chơi hay tập luyện, ....",

        price: '500000',
        total: 100,
        rest: 99,

    }, {
        id: 5,
        nameProduct: 'Giày Thể Thao Nam MWC NATT - 555',
        urlLink: '',
        detail: "Giày Thể Thao Nam MWC NATT - 5328 là mẫu giày được thiết kế theo phong cách hiện đại, màu sắc khỏe khoắn, sang trọng mang đến cho bạn 1 diện mạo hoàn toàn cá tính. Đặc biệt sản phẩm sử dụng chất liệu cao cấp có độ bền tối ưu giúp bạn thoải mái trong mọi hoàn cảnh.  Chất liệu cao cấp : thoáng khí cả mặt trong lẫn mặt ngoài khiến người mang luôn cảm thấy dễ chịu dù hoạt động trong thời gian dài.   Thiết kế thông minh:     - Giày có trọng lượng nhẹ.    - Lớp lót có lỗ thông hơi giúp đôi giày luôn thoáng khí, không gây hầm bí hay khó chịu khi mang.   - Đặc biệt phần đế được làm bằng cao su tổng hợp, êm ái, thiết kế chống trơn trượt cực kì hiệu quả . Thích hợp với mọi hoạt động: Sản phẩm thích hợp cho các hoạt động thể thao như: đi bộ, chạy bộ, đi làm, đi chơi hay tập luyện, ....",

        price: '600000',
        total: -10,
        rest: 10,

    }, {
        id: 6,
        nameProduct: 'Giày Thể Thao Nam MWC NATT - 999',
        urlLink: '',
        detail: "Giày Thể Thao Nam MWC NATT - 5328 là mẫu giày được thiết kế theo phong cách hiện đại, màu sắc khỏe khoắn, sang trọng mang đến cho bạn 1 diện mạo hoàn toàn cá tính. Đặc biệt sản phẩm sử dụng chất liệu cao cấp có độ bền tối ưu giúp bạn thoải mái trong mọi hoàn cảnh.  Chất liệu cao cấp : thoáng khí cả mặt trong lẫn mặt ngoài khiến người mang luôn cảm thấy dễ chịu dù hoạt động trong thời gian dài.   Thiết kế thông minh:     - Giày có trọng lượng nhẹ.    - Lớp lót có lỗ thông hơi giúp đôi giày luôn thoáng khí, không gây hầm bí hay khó chịu khi mang.   - Đặc biệt phần đế được làm bằng cao su tổng hợp, êm ái, thiết kế chống trơn trượt cực kì hiệu quả . Thích hợp với mọi hoạt động: Sản phẩm thích hợp cho các hoạt động thể thao như: đi bộ, chạy bộ, đi làm, đi chơi hay tập luyện, ....",
        price: '900000',
        total: -100,
        rest: 90,

    },
]
export const contactReducerProduct = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];
        case UPDATE_PRODUCT:
            return state.map((updateProduct) => updateProduct.id === action.payload.id ? action.payload : updateProduct )
        case DELETE_PRODUCT:
            return state.filter((deleteproduct) =>deleteproduct.id !== action.payload && deleteproduct)
        default:
            return state;
    }

}