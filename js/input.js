function addRow() {
  var newColumn = document.createElement("div");
  newColumn.innerHTML = `
     <div class="row g-3 mt-1">
        <div class="col-12 col-sm-6">
                                    <select class="form-select border-0 noborder" style="height: 55px;">
                                        <option selected="">اختر الخدمة التي تحتاجها</option>
                                        <option value="1">الصيانة الكهربائية</option>
                                        <option value="2">التمديدات الصحية</option>
                                        <option value="3">العمارة</option>
                                        <option value="3">التبليط</option>
                                        <option value="3">الطاقة الشمسية</option>
                                        <option value="3">تصليح الغسالات</option>
                                        <option value="3">تصليح البرادات</option>
                                        <option value="3">الطلاء والعزل</option>
                                        <option value="3">التنظيف</option>
                                    </select>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <select class="form-select border-0 noborder" style="height: 55px;">
                                        <option selected="">اختر عدد العمال</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                      </div>
             <button class="btn bg-danger noborder mt-3 text-center" onclick="removeRow(this.parentNode)"><i class="fas fa-minus c"></i></button>

                          `;
  document.getElementById("inRows").appendChild(newColumn);
}
function removeRow(node) {
  return node.remove();
}
