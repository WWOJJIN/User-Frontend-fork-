import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FiHeart,
  FiUser,
  FiBell,
  FiSettings,
  FiLogOut,
  FiCalendar,
  FiCreditCard,
  FiChevronRight,
} from 'react-icons/fi';
import './style/Header.scss';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSearchPage = location.pathname === '/search';
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const profileMenuRef = useRef(null);

  const handleFavoritesClick = () => {
    navigate('/favorites');
  };

  const handleBookingHistoryClick = () => {
    navigate('/booking-confirmation');
  };

  const handleProfileToggle = (event) => {
    event?.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogoutClick = () => {
    console.log('Logout clicked');
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="inner">
        <Link to="/" className="logo-link">
          <h1 className="logo">Hotels</h1>
        </Link>
        <div className="header-actions">
          <div className={`profile-menu ${isDropdownOpen ? 'dropdown-open' : ''}`} ref={profileMenuRef}>
            <button
              type="button"
              className="profile-trigger"
              onClick={handleProfileToggle}
              onMouseDown={(e) => e.stopPropagation()}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              <div className="avatar"></div>
              <div className="profile-info">
                <strong>Tomhoon</strong>
                <span>Online</span>
              </div>
            </button>
            <div className="dropdown" onClick={(e) => e.stopPropagation()}>
              <button type="button" className="menu-item" onClick={() => setIsDropdownOpen(false)}>
                <div className="menu-main">
                  <FiUser />
                  <span>계정</span>
                </div>
                <FiChevronRight className="menu-arrow" />
              </button>
              <button type="button" className="menu-item" onClick={() => setIsDropdownOpen(false)}>
                <div className="menu-main">
                  <FiCreditCard />
                  <span>결제내역</span>
                </div>
                <FiChevronRight className="menu-arrow" />
              </button>
              <button type="button" className="menu-item" onClick={() => setIsDropdownOpen(false)}>
                <div className="menu-main">
                  <FiSettings />
                  <span>설정</span>
                </div>
                <FiChevronRight className="menu-arrow" />
              </button>
              <button
                type="button"
                className="menu-item"
                onClick={() => {
                  setIsDropdownOpen(false);
                  handleFavoritesClick();
                }}
              >
                <div className="menu-main">
                  <FiHeart />
                  <span>찜 내역</span>
                </div>
                <FiChevronRight className="menu-arrow" />
              </button>
              <button
                type="button"
                className="menu-item"
                onClick={() => {
                  setIsDropdownOpen(false);
                  handleBookingHistoryClick();
                }}
              >
                <div className="menu-main">
                  <FiCalendar />
                  <span>예약내역</span>
                </div>
                <FiChevronRight className="menu-arrow" />
              </button>
            </div>
          </div>
          <div className="divider"></div>
          <button className="btn icon" onClick={handleLogoutClick}>
            <FiLogOut />
            <span>로그아웃</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

