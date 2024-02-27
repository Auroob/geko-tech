import React from 'react';
import "./Pricing.css";
import Link from "next/link";

const Pricing = () => {
  return (
      <section className="lg:py-16">
         <div class="container-fluid">
            <div class="container">
            <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
                <div class="card text-center">
                <div class="title">
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    <h2>Recruitment Solutions</h2>
                </div>
                <div class="price">
                    <h4><sup>$</sup>25</h4>
                </div>
                <div class="option">
                    <ul>
                    <li><i class="fa fa-check" aria-hidden="true"></i>Precision Referrals</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i>Elevate Your First Round</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i>Comprehensive Talent Acquisition</li>
                    </ul>
                </div>
                <Link href="/service/recruitment-solution">
                    Learn More
                </Link>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card text-center">
                <div class="title">
                    <i class="fa fa-plane" aria-hidden="true"></i>
                    <h2>Staff <br />Augmentation</h2>
                </div>
                <div class="price">
                    <h4><sup>$</sup>50</h4>
                </div>
                <div class="option">
                    <ul>
                    <li><i class="fa fa-check" aria-hidden="true"></i>Comprehensive Staff Augmentation</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i>Flexible Staffing Solutions</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i>Comprehensive Staff Augmentation</li>
                    </ul>
                </div>
                <Link href="/service/staff-augmentation">
                    Learn More
                </Link> 
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card text-center">
                <div class="title">
                    <i class="fa fa-rocket" aria-hidden="true"></i>
                    <h2>Dev Shop for Tech Projects</h2>
                </div>
                <div class="price">
                    <h4><sup>$</sup>100</h4>
                </div>
                <div class="option">
                    <ul>
                    <li><i class="fa fa-check" aria-hidden="true"></i>Project Consultation & Planning</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i>3Collaborative Project Development</li>
                    <li><i class="fa fa-check" aria-hidden="true"></i>Full-Scale Project Execution</li>
                    </ul>
                </div>
                <Link href="/service/dev-shop">
                    Learn More
                </Link>
                </div>
            </div>
            </div>
        </div>
    </div>
      </section>
  );
};

export default Pricing;