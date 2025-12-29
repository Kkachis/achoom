document.addEventListener('DOMContentLoaded', () => {
    // 햄버거 메뉴 토글
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // 스크롤 애니메이션 효과 (Intersection Observer)
    const fadeElements = document.querySelectorAll('.major-card, .faculty-card, .stat-item, .step');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // 네비게이션 부드러운 이동 시 메뉴 닫기
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
});