
# Linked-list

## I. Singly Linked-list

![Singly Linked List](../docs/images/single-link.png)

### 1. Định nghĩa

- Là tập hợp các phần tử cùng loại (giống với Array) nhưng tại mỗi phần tử sẽ có liên kết với nhau, giống như 1 mắt xích.
- Node cuối luôn trỏ về null.

### 2. Đặc điểm

- Chỉ cần lưu node đầu tiên là có thể truy xuất cả mảng.
- Khả năng truy xuất 1 phần tử của mảng là O(n).
- Khả năng thêm và xóa 1 phần tử: O(1) (* Vị trí đó phải biết trước).

### Các thao tác với Singly Linked-List

1. **Thêm** phần tử **vào giữa**.
  Step 1: Tìm cur node và next.
  Step 2: Trỏ new node vào next.
  Step 3: Trỏ cur vào new.

2. **Thêm** phần tử **vào đầu**.
  Step 1: Xác định head và trỏ new vào head.
  Step 2: Gán head = new.

3. **Thêm** phần tử **vào cuối**.
  Step 1: Xác định last (là node trở đến NULL).
  Step 2: Trỏ last vào new.

4. **Xóa** phần tử ở **giữa list**.
  Step 1: Xác định prev, cur , next.
  Step 2: Trỏ prev vào next.
  Step 3: Giải phóng vùng nhớ dành cho cur (Đối với: C/C++ - Còn lại những ngôn ngữ bậc cao có cơ chế garbage collection thì không cần giải phóng manually).

5. **Xóa** phần tử ở **đầu list**.
  Step 1: Xác định next của head.
  Step 2: Trỏ head vào next.
  Step 3: Giải phóng vùng nhớ.

6. **Xóa** phần tử ở **cuối list**.
  Step 1: Xác định prev và last.
  Step 2: Trỏ prev vào null.
  Step 3: Giải phóng vùng nhớ.
