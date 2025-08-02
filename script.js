document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Initialize Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#3E92CC"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#3E92CC",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
    
    // Global COVID-19 Data
    const globalStats = {
        cases: "700M+",
        deaths: "6.9M+",
        vaccinated: "5.3B+",
        active: "15M+"
    };
    
    // Update global stats
    document.getElementById('total-cases').textContent = globalStats.cases;
    document.getElementById('total-deaths').textContent = globalStats.deaths;
    document.getElementById('total-vaccinated').textContent = globalStats.vaccinated;
    document.getElementById('active-cases').textContent = globalStats.active;
    
    // Country Data
    const countryData = {
        "India": {
            cases: "44.7M",
            deaths: "531K",
            recovery: "98.7%",
            status: "🔴",
            deathsDetail: "530,533",
            recoveries: "44,134,786",
            tests: "918M",
            vaccinationRate: "70%",
            insight: "What triggered the second wave, and how was it managed?",
            casesData: [1000, 8000, 40000, 90000, 400000, 300000, 150000, 50000, 20000, 10000],
            vaccinationData: [10, 25, 40, 60, 70]
        },
        "US": {
            cases: "103M",
            deaths: "1.1M",
            recovery: "98.1%",
            status: "🟡",
            deathsDetail: "1,127,152",
            recoveries: "101,437,829",
            tests: "1.1B",
            vaccinationRate: "68%",
            insight: "How did early vaccinations change infection curves?",
            casesData: [50000, 250000, 300000, 200000, 100000, 80000, 50000, 30000, 20000, 10000],
            vaccinationData: [5, 20, 50, 65, 68]
        },
        "China": {
            cases: "9.9M",
            deaths: "121K",
            recovery: "98.8%",
            status: "🟢",
            deathsDetail: "120,952",
            recoveries: "9,790,000",
            tests: "160M",
            vaccinationRate: "90%",
            insight: "What did zero-COVID policies achieve long-term?",
            casesData: [1000, 5000, 10000, 50000, 30000, 10000, 5000, 2000, 1000, 500],
            vaccinationData: [20, 50, 80, 88, 90]
        },
        "Pakistan": {
            cases: "1.6M",
            deaths: "30K",
            recovery: "97.5%",
            status: "🟡",
            deathsDetail: "30,656",
            recoveries: "1,560,000",
            tests: "30M",
            vaccinationRate: "55%",
            insight: "Was testing scale enough to detect community spread?",
            casesData: [500, 2000, 6000, 8000, 5000, 3000, 1500, 800, 400, 200],
            vaccinationData: [5, 15, 35, 50, 55]
        },
        "Russia": {
            cases: "22.8M",
            deaths: "398K",
            recovery: "98.3%",
            status: "🔴",
            deathsDetail: "398,718",
            recoveries: "22,400,000",
            tests: "300M",
            vaccinationRate: "58%",
            insight: "How impactful was the Sputnik V rollout?",
            casesData: [10000, 25000, 90000, 120000, 80000, 40000, 20000, 10000, 5000, 3000],
            vaccinationData: [5, 20, 40, 55, 58]
        },
        "Brazil": {
            cases: "37.5M",
            deaths: "700K",
            recovery: "98.1%",
            status: "🔴",
            deathsDetail: "700,022",
            recoveries: "36,800,000",
            tests: "63M",
            vaccinationRate: "85%",
            insight: "Why did Brazil experience multiple high waves?",
            casesData: [20000, 80000, 100000, 300000, 200000, 100000, 50000, 30000, 15000, 8000],
            vaccinationData: [10, 30, 60, 80, 85]
        },
        "UK": {
            cases: "24.6M",
            deaths: "220K",
            recovery: "99.1%",
            status: "🟢",
            deathsDetail: "220,682",
            recoveries: "24,380,000",
            tests: "522M",
            vaccinationRate: "75%",
            insight: "How did variant surges test NHS capacity?",
            casesData: [5000, 60000, 70000, 50000, 30000, 20000, 15000, 10000, 8000, 5000],
            vaccinationData: [15, 40, 65, 73, 75]
        },
        "Italy": {
            cases: "25.8M",
            deaths: "191K",
            recovery: "99.3%",
            status: "🟡",
            deathsDetail: "191,093",
            recoveries: "25,600,000",
            tests: "250M",
            vaccinationRate: "80%",
            insight: "What lessons were learned as the first EU epicenter?",
            casesData: [10000, 60000, 30000, 20000, 15000, 10000, 8000, 5000, 3000, 2000],
            vaccinationData: [10, 35, 65, 78, 80]
        }
    };
    
    // Initialize country cards
    const countryCards = document.querySelectorAll('.country-card');
    countryCards.forEach(card => {
        const country = card.getAttribute('data-country');
        const data = countryData[country];
        
        card.querySelector('.cases').textContent = data.cases;
        card.querySelector('.deaths').textContent = data.deaths;
        card.querySelector('.recovery').textContent = data.recovery;
        card.querySelector('.status-tag').textContent = data.status;
        
        // Add click event to country cards
        card.addEventListener('click', function() {
            document.getElementById('country-dropdown').value = country;
            showCountryStats(country);
        });
    });
    
    // Show country stats when dropdown is used
    const showStatsBtn = document.getElementById('show-stats-btn');
    showStatsBtn.addEventListener('click', function() {
        const selectedCountry = document.getElementById('country-dropdown').value;
        if (selectedCountry) {
            showCountryStats(selectedCountry);
        } else {
            alert('Please select a country first');
        }
    });
    
    // Chart instances
    let casesChart = null;
    let vaccinationChart = null;
    
    // Function to show country statistics
    function showCountryStats(country) {
        const data = countryData[country];
        const detailsPanel = document.getElementById('country-details');
        
        // Update country name and insight
        document.getElementById('selected-country-name').textContent = country;
        document.getElementById('country-insight').textContent = data.insight;
        
        // Update stats
        document.getElementById('detail-deaths').textContent = data.deathsDetail;
        document.getElementById('detail-recoveries').textContent = data.recoveries;
        document.getElementById('detail-tests').textContent = data.tests;
        document.getElementById('detail-vaccination-rate').textContent = data.vaccinationRate;
        
        // Create or update charts
        const casesCtx = document.getElementById('cases-chart').getContext('2d');
        const vaccinationCtx = document.getElementById('vaccination-chart').getContext('2d');
        
        // Destroy previous charts if they exist
        if (casesChart) {
            casesChart.destroy();
        }
        if (vaccinationChart) {
            vaccinationChart.destroy();
        }
        
        // Cases over time chart
        casesChart = new Chart(casesCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                datasets: [{
                    label: 'Cases',
                    data: data.casesData,
                    borderColor: '#3E92CC',
                    backgroundColor: 'rgba(62, 146, 204, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Cases Over Time',
                        font: {
                            size: 16
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
        
        // Vaccination chart
        vaccinationChart = new Chart(vaccinationCtx, {
            type: 'bar',
            data: {
                labels: ['2021 Q1', '2021 Q2', '2021 Q3', '2021 Q4', '2022 Q1'],
                datasets: [{
                    label: 'Vaccination Rate %',
                    data: data.vaccinationData,
                    backgroundColor: '#50C878',
                    borderColor: '#50C878',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Vaccination Progress',
                        font: {
                            size: 16
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
        
        // Show the details panel
        detailsPanel.style.display = 'block';
        
        // Scroll to details panel
        setTimeout(() => {
            detailsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
    
    // Article filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const articleCards = document.querySelectorAll('.article-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter articles
            articleCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    const tags = card.getAttribute('data-tags');
                    if (tags.includes(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            // In a real app, you would send this to your server
            alert(`Thank you for subscribing with ${email}! You'll receive updates soon.`);
            this.reset();
        });
    }
    
    // Scroll animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.stat-card, .country-card, .article-card, .tip-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.stat-card, .country-card, .article-card, .tip-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Scroll to top button (could be added to HTML)
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Add some styles for the scroll-to-top button
    const scrollToTopStyles = document.createElement('style');
    scrollToTopStyles.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: var(--accent-blue);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
        }
        
        .scroll-to-top:hover {
            background-color: #2d7fb3;
            transform: translateY(-3px);
        }
    `;
    document.head.appendChild(scrollToTopStyles);
});