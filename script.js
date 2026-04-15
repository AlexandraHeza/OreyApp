
    // ========== 1. FONDO DINÁMICO - SOLO CAMBIO AUTOMÁTICO, SIN SCROLL ==========
    const bgImages = [
        "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    ];

    let currentIndex = 0;
    const dynamicBg = document.getElementById('dynamicBg');
    
    // Establecer primera imagen de fondo
    dynamicBg.style.backgroundImage = `url(${bgImages[0]})`;
    
    // Cambiar fondo automáticamente cada 20 segundos (sin scroll)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % bgImages.length;
        dynamicBg.style.backgroundImage = `url(${bgImages[currentIndex]})`;
    }, 20000);

    // ========== 2. RESEÑAS ==========
    const testimonios = [
        { nombre: "Yanhong Tang", texto: "Me hicieron un armario de madera que encantó. Muy buen servicio.", rating: 5, imagen: "https://randomuser.me/api/portraits/women/68.jpg" },
        { nombre: "Andrés Navarro", texto: "Instalaron piso nuevo en mi departamento. Rápido, limpio y excelente calidad.", rating: 5, imagen: "https://randomuser.me/api/portraits/men/32.jpg" },
        { nombre: "Adry Martinez", texto: "Cambié mis persianas viejas en 3 días. Quedaron perfectas, muy satisfecha.", rating: 5, imagen: "https://randomuser.me/api/portraits/women/44.jpg" },
        { nombre: "Marisol Pérez", texto: "Calidad increíble.", rating: 5, imagen: "https://randomuser.me/api/portraits/women/90.jpg" },
        { nombre: "Felipe Castillo", texto: "Muy buena atención, producto de calidad e instalación muy rápida.", rating: 5, imagen: "https://randomuser.me/api/portraits/men/75.jpg" },
        { nombre: "Karla Rojas", texto: "Mi cocina quedó hermosa, cumplieron presupuesto y tiempo.", rating: 5, imagen: "https://randomuser.me/api/portraits/women/22.jpg" }
    ];

    const sliderContainer = document.getElementById('testimonialSlider');

    function renderTestimonials() {
        if (!sliderContainer) return;
        sliderContainer.innerHTML = '';
        testimonios.forEach(t => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.innerHTML = `
                <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;">
                    <img src="${t.imagen}" style="width: 55px; height: 55px; border-radius: 50%; object-fit: cover; border: 2px solid #c8a95f;">
                    <div><strong>${t.nombre}</strong><br>⭐ ${t.rating}.0</div>
                </div>
                <p>“${t.texto}”</p>
            `;
            sliderContainer.appendChild(card);
        });
        
        let index = 0;
        setInterval(() => {
            if (sliderContainer.children.length) {
                index = (index + 1) % sliderContainer.children.length;
                sliderContainer.children[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }, 40000);
    }

    renderTestimonials();

    // ========== 3. IMÁGENES EN PRODUCTOS ==========
    const productImages = [
        "files/persianas.jpg",
        "files/pisos.jpg",
        "files/tapices.jpg",
        "files/exteriores.jpg"
    ];

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, idx) => {
        const imgElem = document.createElement('img');
        imgElem.src = productImages[idx % productImages.length];
        imgElem.style.width = '100%';
        imgElem.style.borderRadius = '24px';
        imgElem.style.marginTop = '1rem';
        imgElem.style.height = '180px';
        imgElem.style.objectFit = 'cover';
        imgElem.classList.add('floating-img');
        card.appendChild(imgElem);
    });

    // ========== 4. MENÚ RESPONSIVE ==========
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#1e1b16';
                navLinks.style.padding = '2rem';
                navLinks.style.gap = '1rem';
                navLinks.style.zIndex = '1000';
            }
        });
    }

    // ========== 5. IMAGEN PREMIUM QUE CAMBIA ==========
    const premiumImages = [
        "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    ];
    
    const premiumImg = document.querySelector('.premium-image img');
    let premiumIdx = 0;
    if (premiumImg) {
        setInterval(() => {
            premiumIdx = (premiumIdx + 1) % premiumImages.length;
            premiumImg.style.opacity = '0.5';
            setTimeout(() => {
                premiumImg.src = premiumImages[premiumIdx];
                premiumImg.style.opacity = '1';
            }, 200);
        }, 7000);
    }
