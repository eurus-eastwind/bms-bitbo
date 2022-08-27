import React from 'react'

export default function BITBoAdminSidebar() {
    return (
        <React.Fragment>
            <div class="leftside-menu">

                <a href="index.html" class="logo text-center logo-light">
                    <span class="logo-lg">
                        <img src="assets/images/bitbo-logo-with-text.png" alt="" height="40"/>
                    </span>
                </a>

                <div class="h-100" id="leftside-menu-container" data-simplebar="">
                    <ul class="side-nav">

                        <li class="side-nav-title side-nav-item">Menu</li>

                        <li class="side-nav-item">
                            <a href="index.html" class="side-nav-link">
                                <i class="uil-chart-pie"></i>
                                <span> Dashboard </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a href="services.html" class="side-nav-link">
                                <i class="uil-clipboard-alt"></i>
                                <span> Services </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a href="blotter.html" class="side-nav-link">
                                <i class="uil-comment-exclamation"></i>
                                <span> Blotter </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a href="users.html" class="side-nav-link">
                                <i class="uil-user-square"></i>
                                <span> Users </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a href="households.html" class="side-nav-link">
                                <i class="uil-home-alt"></i>
                                <span> Households </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a href="brgyid.html" class="side-nav-link">
                                <i class="uil-postcard"></i>
                                <span> Brgy. ID </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a href="payment.html" class="side-nav-link">
                                <i class="uil-bill"></i>
                                <span> Payment </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a href="events.html" class="side-nav-link">
                                <i class="uil-trophy"></i>
                                <span> Events </span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a href="logs.html" class="side-nav-link">
                                <i class="uil-notes"></i>
                                <span> Logs </span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </React.Fragment>
    )
}
