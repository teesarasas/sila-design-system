import React from 'react';

export interface ButtonProps {
    children: React.ReactNode;
    type?: 'primary' | 'secondary';
    isDisabled?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  // 1. แกะค่า (Destructuring) ออกมาจาก props
  // สังเกตว่าผมกำหนดค่า Default ให้ variant = 'primary' ไว้เลย กันลืม
  const { 
    children, 
    type = 'primary', 
    leadingIcon, 
    trailingIcon, 
    isDisabled, 
    onClick 
  } = props;

  return (
    <button 
      disabled={isDisabled}
      onClick={onClick}
      // ตรงนี้เดี๋ยวเราค่อยมาใส่ className ตาม type ทีหลัง
      // ตอนนี้ใส่ style หลอกๆ ให้เห็นภาพก่อนว่ามันเปลี่ยนไปตาม props นะ
      style={{ 
        padding: '12px 24px', 
        display: 'flex', 
        alignItems: 'center',
        gap: '8px', // ระยะห่างระหว่าง icon กับ text
        backgroundColor: type === 'primary' ? 'blue' : 'gray', // Logic เปลี่ยนสีชั่วคราว
        color: 'white',
        border: 'none',
        opacity: isDisabled ? 0.5 : 1
      }}
    >
      {/* 2. Logic การวาง Icon: ถ้ามี leadingIcon ส่งมา ให้โชว์ตรงนี้ */}
      {leadingIcon && (
        <span className="icon-leading">{leadingIcon}</span>
      )}

      {/* ข้อความตรงกลาง */}
      <span>{children}</span>

      {/* 3. Logic การวาง Icon: ถ้ามี trailingIcon ส่งมา ให้โชว์ตรงนี้ */}
      {trailingIcon && (
        <span className="icon-trailing">{trailingIcon}</span>
      )}
    </button>
  );
};