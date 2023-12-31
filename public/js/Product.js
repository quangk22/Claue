
let products = null;
let listProduct = document.getElementById('product1');
let listProduct2 = document.getElementById('bestSeller');
fetch('../public/js/Product.json')
    .then(response => response.json())
    .then(data => {
        products = data.slice(0, 8);
        console.log(products);
        addDataToHTML('product1', products);
        addDataToHTML('bestSeller', products);
    })
function addDataToHTML(containerId , data) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    data.forEach(products => {
        let newProduct = document.createElement('a');
        newProduct.href = '../public/detailProduct.html?id=' + products.id;
        newProduct.classList.add('item');
        newProduct.innerHTML = `
        <div class="card">
             <div class="product-img relative group">
                <div class="">
                    <a href="" class="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                        <img src="${products.img1}" alt="" loading="lazy">
                    </a>
                     <a href="../public/detailProduct.html" class="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 before:bg-[rgba(0,0,0,.1)] before:content-['']  before:h-full before:absolute before:top-0 before:left-0 before:w-full before:hidden before:group-hover:block before:transition-all before:duration-300">
                        <img src="${products.img2}" alt="" loading="lazy">
                     </a>
                </div>
                <div class="absolute top-3 left-3 max-lg:block ">
                    <a href="#" class="hidden group-hover:block max-lg:block">
                         <div class="block max-lg:block">
                            <div class="max-lg:block"><i class="fa-regular fa-heart fa-lg text-white "></i></div>
                            <div class="quickShop lg:hidden  max-md:block "><i class="fa-solid fa-eye fa-lg text-white"></i></div></div>
                     </a>
                </div>
                   <div class="product-btn  absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-rows-2 gap-2 group-hover:opacity-100 opacity-0 group-hover:top-1/2 group-hover:transition-all group-hover:duration-300 max-lg:hidden">
                         <div class="bg-white hover:text-white hover:bg-black rounded-full py-[10px] px-6 font-poppins flex text-center text-sm">
                            <a href="./detailProduct.html" class="whitespace-nowrap">Seclect options</a>
                         </div>
                        <div class="quickShop bg-white hover:text-white hover:bg-black rounded-full py-[10px] px-6 font-poppins flex text-center text-sm justify-center cursor-pointer">
                            <button class="cursor-pointer">Quick Shop</button>
                       </div>
                </div>

                                </div>

                                <div class="product-info mt-[15px] font-poppins text-sm  ">
                                    <h3 class="text-sm hover:text-[#56CFE1] cursor-pointer">${products.name}
                                    </h3>
                                    <span class="text-[#696969]"> $${products.price1}.00 - $${products.price2}.00 </span>
                                    <div class="flex">
                                        <Bottom
                                            class="rounded-full m-1 flex bg-black border-[#333] border-[2px]">
                                            <span class="w-4 h-4 bg-[#25bdb0] rounded-full"></span>
                                        </Bottom>
                                        <Bottom class="rounded-full m-1 flex  border-[#ddd] border-[2px]">
                                            <span class="w-4 h-4 bg-[#fcc6de] rounded-full"></span>
                                        </Bottom>
                                    </div>
                                </div>
                            </div>
        `;
        if (containerId === 'product1') {
            listProduct.appendChild(newProduct);
        } else if (containerId === 'bestSeller') {
            listProduct2.appendChild(newProduct);
        }
    })
}
//------------------------------------------------------
