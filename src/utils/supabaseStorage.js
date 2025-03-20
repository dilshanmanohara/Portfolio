import { supabase } from '../config/supabaseClient'

export const uploadProjectImage = async (file, projectName) => {
  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${projectName.toLowerCase().replace(/ /g, '-')}.${fileExt}`
    const filePath = `${fileName}`

    const { data, error } = await supabase.storage
      .from('project-images')
      .upload(filePath, file, {
        upsert: true
      })

    if (error) {
      throw error
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('project-images')
      .getPublicUrl(filePath)

    return publicUrl
  } catch (error) {
    console.error('Error uploading image:', error)
    throw error
  }
} 