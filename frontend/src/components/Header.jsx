import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiHeart, FiUser, FiBell, FiSettings, FiLogOut, FiHome } from 'react-icons/fi';
import './style/Header.scss';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSearchPage = location.pathname === '/search';

  const handleFavoritesClick = () => {
    navigate('/favorites');
  };

  return (
    <header className="site-header">
      <div className="inner">
        <Link to="/" className="logo-link">
          <h1 className="logo">Hotels</h1>
          {isSearchPage && (
            <div className="logo-subtitle">
              <FiHome />
              <span>Find Stays</span>
            </div>
          )}
        </Link>
        <div className="header-actions">
          <button className="btn icon" onClick={handleFavoritesClick}>
            <FiHeart />
            <span>찜하기</span>
          </button>
          <div className="divider"></div>
          <div className="profile-menu">
            <div className="avatar"></div>
            <div className="profile-info">
              <strong>Tomhoon</strong>
              <span>Online</span>
            </div>
            <div className="dropdown">
              <div className="menu-item">
                <FiUser /> 계정
              </div>
              <div className="menu-item">
                <FiBell /> 알림센터
              </div>
              <div className="menu-item">
                <FiSettings /> 설정
              </div>
              <div className="menu-item">
                <FiLogOut /> 로그아웃
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

