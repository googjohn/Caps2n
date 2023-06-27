import Card from "./Card";
import React from 'react'

const CardList = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  )
}

export default CardList;