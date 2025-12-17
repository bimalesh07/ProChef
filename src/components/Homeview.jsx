import React from 'react'
import RecepiesSlider from './RecepiesSlider'
import Treanding from './Treanding'
import CategorySelcted from './CategorySelcted'
import { API_URL } from './useFech'

const Homeview = () => {
  return (
    <>
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <RecepiesSlider
          title="Staff Curated Picks"
          fetchUrl={`${API_URL}search.php?f=C`}
        />

        <Treanding
          title="Treanding..."
          fetchUrl={`${API_URL}filter.php?a=Canadian`}
        />

        <CategorySelcted />
      </main>
    </>
  );
}

export default Homeview