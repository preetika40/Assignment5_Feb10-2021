export class Create_dom_elements{
    
  createDiv(): void {
    const div: HTMLElement= document.createElement("div");
    const h1: HTMLElement= document.createElement("h1");
    h1.textContent= "Lorem Ipsum";
    h1.style.margin= "0";
    div.style.textAlign= "center";
    div.appendChild(h1);
    div.appendChild(this.createBr());
    div.appendChild(this.createImage());
    div.appendChild(this.createBr());
    div.appendChild(this.createTable());
    div.appendChild(this.createList());
    div.appendChild(this.createLink());
    document.body.appendChild(div);
  }

  createImage(): HTMLElement {
    const image: HTMLImageElement = document.createElement("img");
    image.src= "./images/portfolio-3.jpg";
    image.alt= "flower-vase";
    image.setAttribute("width", "400px");
    image.setAttribute("height", "300px");
    image.style.display= "block";
    image.style.marginLeft= "35%";
    return image;
  }

  createLink(): HTMLElement {
    const a: HTMLAnchorElement = document.createElement("a"); 
    a.textContent= "CLICK HERE";
    a.href= "/home";
    a.style.textDecoration= "none";
    a.style.fontWeight= "bold";
    return a;
  }

  createTable(): HTMLElement {
    const table: HTMLTableElement= document.createElement("table");

    let row1 = table.insertRow(0);
    let cell11 = row1.insertCell(0);
    cell11.innerHTML = "Nam";
    let cell12 = row1.insertCell(1);
    cell12.innerHTML = "congue";
    let cell13 = row1.insertCell(2);
    cell13.innerHTML = "metus";
    let cell14 = row1.insertCell(3);
    cell14.innerHTML = "Class";
    row1.style.fontWeight= "bold";

    let row2 = table.insertRow(1);
    let cell21 = row2.insertCell(0);
    cell21.innerHTML = "aptent";
    let cell22 = row2.insertCell(1);
    cell22.innerHTML = "daciti";
    let cell23 = row2.insertCell(2);
    cell23.innerHTML = "sociosqu";
    let cell24 = row2.insertCell(3);
    cell24.innerHTML = "adnmj";
    table.setAttribute("width", "50%");

    let row3 = table.insertRow(2);
    let cell31 = row3.insertCell(0);
    cell31.innerHTML = "litora";
    let cell32 = row3.insertCell(1);
    cell32.innerHTML = "torquent";
    let cell33 = row3.insertCell(2);
    cell33.innerHTML = "per";
    let cell34 = row3.insertCell(3);
    cell34.innerHTML = "kilnh";

    table.setAttribute("width", "50%");
    table.setAttribute("border", "2");
    table.style.marginLeft= "25%";
    table.style.fontSize= "18px";
    return table;
  }

  createList(): HTMLElement {
    let ul: HTMLElement= document.createElement('ul');
    let li: HTMLElement = document.createElement('li');
    let h3: HTMLElement = document.createElement('h2');
    h3.textContent= "Lorem";
    h3.style.margin= "0";
    h3.style.width= "85px";
    h3.style.borderBottom= "1px solid black";
    ul.appendChild(h3);    
    li.textContent = 'Products';
    ul.appendChild(li);
    li = document.createElement('li');
    li.textContent = 'Contact Us';
    ul.appendChild(li);
    li = document.createElement('li');
    li.textContent = 'Services';
    ul.appendChild(li);
    li = document.createElement('li');
    li.textContent = 'Offers';
    ul.appendChild(li);
    ul.style.textAlign= "left";
    ul.style.fontSize= "20px";
    return ul;
  }

  createBr(): HTMLElement {
    const br: HTMLElement= document.createElement('br');
    return br;
  }
}

let createDomElements = new Create_dom_elements();
createDomElements.createDiv();