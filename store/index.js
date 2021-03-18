export const state = () => ({
  memories: [
    {
      id: 's1',
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1800&h=1200&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F07%2F21%2Fcascade-mountains-range-USMNTNS0720.jpg',
      title: 'A trip to the mountains',
      description: 'It was a really nice trip!',
    },
    {
      id: 's2',
      image:
        'https://blog1.fkimg.com/wp-content/uploads/2019/06/ka-anapali-beach-610x350.jpg',
      title: 'Surfing the sea side',
      description: 'Feeling the cool breeze',
    },
    {
      id: 's3',
      image:
        'https://indonesiaexpat.id/wp-content/uploads/2017/04/Malaysian-Peranakan-Cuisine-Image-via-Lipstiq.jpg',
      title: 'Good eating',
      description: 'It was so yummyyyy!',
    },
  ],
})

export const getters = {
  getMemories(state) {
    return state.memories
  },
  getSingleMemory: (state) => (memoryId) =>
    state.memories.find((eachMemory) => eachMemory.id == memoryId),
}
