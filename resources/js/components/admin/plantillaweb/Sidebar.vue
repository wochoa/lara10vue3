<template>
<nav id="sidebar" class="sidebar js-sidebar">
    <div class="sidebar-content js-simplebar" data-simplebar="init">
        <div class="simplebar-wrapper" style="margin: 0px;">
            <div class="simplebar-height-auto-observer-wrapper">
                <div class="simplebar-height-auto-observer"></div>
            </div>
            <div class="simplebar-mask">
                <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                    <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;">
                        <div class="simplebar-content" style="padding: 0px;">
                            <router-link class="sidebar-brand" to="/">
                                <span class="sidebar-brand-text align-middle">
                                    AdminKit
                                    <sup><small class="badge bg-primary text-uppercase">Pro</small></sup>
                                </span>

                            </router-link>

                            <div class="sidebar-user">
                                <div class="d-flex justify-content-center">
                                    <div class="flex-shrink-0">
                                        <img src="https://demo.adminkit.io/img/avatars/avatar.jpg" class="avatar img-fluid rounded me-1" alt="Charles Hall">
                                    </div>
                                    <div class="flex-grow-1 ps-2">
                                        <a class="sidebar-user-title dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                            Wilmer Ochoa
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-start">
                                            <router-link class="dropdown-item" :to="'/profile'"><i class="align-middle me-1" data-feather="user"></i> Mi perfil</router-link>

                                            <div class="dropdown-divider"></div>
                                            <router-link class="dropdown-item" :to="'/configuser'"><i class="align-middle me-1" data-feather="settings"></i> Configuración y privacidad</router-link>

                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#"><i class="align-middle me-1" data-feather="log-out"></i>Salir sistema</a>
                                        </div>

                                        <div class="sidebar-user-subtitle">Super admin</div>
                                    </div>
                                </div>
                            </div>

                            <ul class="sidebar-nav">
                                <li class="sidebar-header">
                                    Menus
                                </li>
                                <li class="sidebar-item">
                                    <router-link class="sidebar-link" :to="'/'">
                                        <i class="align-middle me-1" data-feather="home"></i>
                                         <span class="align-middle">Dasboard</span>
                                    </router-link>
                                </li>
                                <li class="sidebar-item active">
                                    <a data-bs-target="#dashboards" data-bs-toggle="collapse" class="sidebar-link">
                                        <i class="align-middle me-1" data-feather="users"></i>
                                        <span class="align-middle">Gestion usuarios</span>
                                    </a>
                                    <ul id="dashboards" class="sidebar-dropdown list-unstyled collapse show" data-bs-parent="#sidebar">
                                        <li class="sidebar-item active"><router-link class="sidebar-link" :to="'/usuarios'">Usuarios</router-link></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/dashboard-ecommerce">Roles y permisos
                                            <!-- <span class="sidebar-badge badge bg-primary">Pro</span> -->
                                        </a></li>
                                        <!-- <li class="sidebar-item"><a class="sidebar-link" href="/dashboard-crypto">Crypto <span class="sidebar-badge badge bg-primary">Pro</span></a></li> -->
                                    </ul>
                                </li>

                                <li class="sidebar-item">
                                    <a data-bs-target="#pages" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout align-middle">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="3" y1="9" x2="21" y2="9"></line>
                                            <line x1="9" y1="21" x2="9" y2="9"></line>
                                        </svg> <span class="align-middle">Pages</span>
                                    </a>
                                    <ul id="pages" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                        <li class="sidebar-item"><a class="sidebar-link" href="/pages-settings">Settings</a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/pages-projects">Projects <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/pages-clients">Clients <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/pages-orders">Orders <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/pages-pricing">Pricing <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/pages-chat">Chat <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/pages-blank">Blank Page</a></li>
                                    </ul>
                                </li>

                                <li class="sidebar-item">
                                    <a class="sidebar-link" href="/pages-profile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user align-middle">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg> <span class="align-middle">Profile</span>
                                    </a>
                                </li>

                                <li class="sidebar-item">
                                    <a class="sidebar-link" href="/pages-invoice">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card align-middle">
                                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                            <line x1="1" y1="10" x2="23" y2="10"></line>
                                        </svg> <span class="align-middle">Invoice</span>
                                    </a>
                                </li>

                                <li class="sidebar-item">
                                    <a class="sidebar-link" href="/pages-tasks">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list align-middle">
                                            <line x1="8" y1="6" x2="21" y2="6"></line>
                                            <line x1="8" y1="12" x2="21" y2="12"></line>
                                            <line x1="8" y1="18" x2="21" y2="18"></line>
                                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                        </svg> <span class="align-middle">Tasks</span>
                                        <span class="sidebar-badge badge bg-primary">Pro</span>
                                    </a>
                                </li>

                                <li class="sidebar-item">
                                    <a class="sidebar-link" href="/calendar">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar align-middle">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg> <span class="align-middle">Calendar</span>
                                        <span class="sidebar-badge badge bg-primary">Pro</span>
                                    </a>
                                </li>

                                <li class="sidebar-item">
                                    <a href="#auth" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users align-middle">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg> <span class="align-middle">Auth</span>
                                    </a>
                                    <ul id="auth" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                        <li class="sidebar-item"><a class="sidebar-link" href="/pages-sign-in">Sign In</a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/pages-sign-up">Sign Up</a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/pages-reset-password">Reset Password <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/pages-404">404 Page <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/pages-500">500 Page <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                    </ul>
                                </li>

                                <li class="sidebar-header">
                                    Components
                                </li>
                                <li class="sidebar-item">
                                    <a data-bs-target="#ui" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase align-middle">
                                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                        </svg> <span class="align-middle">UI Elements</span>
                                    </a>
                                    <ul id="ui" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                        <li class="sidebar-item"><a class="sidebar-link" href="/ui-alerts">Alerts <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/ui-buttons">Buttons</a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/ui-cards">Cards</a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/ui-general">General</a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/ui-grid">Grid</a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/ui-modals">Modals <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/ui-offcanvas">Offcanvas <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/ui-placeholders">Placeholders <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/ui-tabs">Tabs <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/ui-typography">Typography</a></li>
                                    </ul>
                                </li>
                                <li class="sidebar-item">
                                    <a data-bs-target="#icons" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-coffee align-middle">
                                            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                                            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                                            <line x1="6" y1="1" x2="6" y2="4"></line>
                                            <line x1="10" y1="1" x2="10" y2="4"></line>
                                            <line x1="14" y1="1" x2="14" y2="4"></line>
                                        </svg> <span class="align-middle">Icons</span>
                                        <span class="sidebar-badge badge bg-light">1.500+</span>
                                    </a>
                                    <ul id="icons" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                        <li class="sidebar-item"><a class="sidebar-link" href="/icons-feather">Feather</a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/icons-font-awesome">Font Awesome <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                    </ul>
                                </li>
                                <li class="sidebar-item">
                                    <a data-bs-target="#forms" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle align-middle">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg> <span class="align-middle">Forms</span>
                                    </a>
                                    <ul id="forms" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                        <li class="sidebar-item"><a class="sidebar-link" href="/forms-basic-inputs">Basic Inputs</a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/forms-layouts">Form Layouts <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/forms-input-groups">Input Groups <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                    </ul>
                                </li>
                                <li class="sidebar-item">
                                    <a class="sidebar-link" href="/tables-bootstrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list align-middle">
                                            <line x1="8" y1="6" x2="21" y2="6"></line>
                                            <line x1="8" y1="12" x2="21" y2="12"></line>
                                            <line x1="8" y1="18" x2="21" y2="18"></line>
                                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                        </svg> <span class="align-middle">Tables</span>
                                    </a>
                                </li>

                                <li class="sidebar-header">
                                    Plugins &amp; Addons
                                </li>
                                <li class="sidebar-item">
                                    <a data-bs-target="#form-plugins" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square align-middle">
                                            <polyline points="9 11 12 14 22 4"></polyline>
                                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                        </svg> <span class="align-middle">Form Plugins</span>
                                    </a>
                                    <ul id="form-plugins" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                        <li class="sidebar-item"><a class="sidebar-link" href="/forms-advanced-inputs">Advanced Inputs <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/forms-editors">Editors <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/forms-validation">Validation <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                    </ul>
                                </li>
                                <li class="sidebar-item">
                                    <a data-bs-target="#datatables" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list align-middle">
                                            <line x1="8" y1="6" x2="21" y2="6"></line>
                                            <line x1="8" y1="12" x2="21" y2="12"></line>
                                            <line x1="8" y1="18" x2="21" y2="18"></line>
                                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                        </svg> <span class="align-middle">DataTables</span>
                                    </a>
                                    <ul id="datatables" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                        <li class="sidebar-item"><a class="sidebar-link" href="/tables-datatables-responsive">Responsive Table <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/tables-datatables-buttons">Table with Buttons <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/tables-datatables-column-search">Column Search <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/tables-datatables-fixed-header">Fixed Header <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/tables-datatables-multi">Multi Selection <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/tables-datatables-ajax">Ajax Sourced Data <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                    </ul>
                                </li>
                                <li class="sidebar-item">
                                    <a data-bs-target="#charts" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2 align-middle">
                                            <line x1="18" y1="20" x2="18" y2="10"></line>
                                            <line x1="12" y1="20" x2="12" y2="4"></line>
                                            <line x1="6" y1="20" x2="6" y2="14"></line>
                                        </svg> <span class="align-middle">Charts</span>
                                    </a>
                                    <ul id="charts" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                        <li class="sidebar-item"><a class="sidebar-link" href="/charts-chartjs">Chart.js</a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/charts-apexcharts">ApexCharts <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                    </ul>
                                </li>
                                <li class="sidebar-item">
                                    <a class="sidebar-link" href="/notifications">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell align-middle">
                                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                        </svg> <span class="align-middle">Notifications</span>
                                        <span class="sidebar-badge badge bg-primary">Pro</span>
                                    </a>
                                </li>
                                <li class="sidebar-item">
                                    <a data-bs-target="#maps" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map align-middle">
                                            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                                            <line x1="8" y1="2" x2="8" y2="18"></line>
                                            <line x1="16" y1="6" x2="16" y2="22"></line>
                                        </svg> <span class="align-middle">Maps</span>
                                    </a>
                                    <ul id="maps" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                        <li class="sidebar-item"><a class="sidebar-link" href="/maps-google">Google Maps</a></li>
                                        <li class="sidebar-item"><a class="sidebar-link" href="/maps-vector">Vector Maps <span class="sidebar-badge badge bg-primary">Pro</span></a></li>
                                    </ul>
                                </li>

                                <li class="sidebar-item">
                                    <a data-bs-target="#multi" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-right-down align-middle">
                                            <polyline points="10 15 15 20 20 15"></polyline>
                                            <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                                        </svg> <span class="align-middle">Multi Level</span>
                                    </a>
                                    <ul id="multi" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                        <li class="sidebar-item">
                                            <a data-bs-target="#multi-2" data-bs-toggle="collapse" class="sidebar-link collapsed">Two Levels</a>
                                            <ul id="multi-2" class="sidebar-dropdown list-unstyled collapse">
                                                <li class="sidebar-item">
                                                    <a class="sidebar-link" href="#">Item 1</a>
                                                </li>
                                                <li class="sidebar-item">
                                                    <a class="sidebar-link" href="#">Item 2</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-item">
                                            <a data-bs-target="#multi-3" data-bs-toggle="collapse" class="sidebar-link collapsed">Three Levels</a>
                                            <ul id="multi-3" class="sidebar-dropdown list-unstyled collapse">
                                                <li class="sidebar-item">
                                                    <a data-bs-target="#multi-3-1" data-bs-toggle="collapse" class="sidebar-link collapsed">Item 1</a>
                                                    <ul id="multi-3-1" class="sidebar-dropdown list-unstyled collapse">
                                                        <li class="sidebar-item">
                                                            <a class="sidebar-link" href="#">Item 1</a>
                                                        </li>
                                                        <li class="sidebar-item">
                                                            <a class="sidebar-link" href="#">Item 2</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="sidebar-item">
                                                    <a class="sidebar-link" href="#">Item 2</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <div class="sidebar-cta">
                                <div class="sidebar-cta-content">
                                    <strong class="d-inline-block mb-2">Weekly Sales Report</strong>
                                    <div class="mb-3 text-sm">
                                        Your weekly sales report is ready for download!
                                    </div>

                                    <div class="d-grid">
                                        <a href="https://adminkit.io/" class="btn btn-outline-primary" target="_blank">Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="simplebar-placeholder" style="width: auto; height: 1320px;"></div>
        </div>
        <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
            <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
        </div>
        <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
            <div class="simplebar-scrollbar" style="height: 138px; transform: translate3d(0px, 0px, 0px); display: block;"></div>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    data: () => ({}),
};
</script>
